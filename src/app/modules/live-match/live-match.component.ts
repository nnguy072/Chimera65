import { LiveMatchService } from './live-match.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ILiveMatchModel } from 'src/app/shared/models/live-match.model';

@Component({
  selector: 'app-live-match',
  templateUrl: './live-match.component.html',
  styleUrls: ['./live-match.component.scss']
})
export class LiveMatchComponent implements OnInit {
  private _ngUnsubscribe: Subject<void> = new Subject<void>();
  private _searchSubject = new Subject<string>();
  public liveMatch?: ILiveMatchModel;
  
  constructor(
    private _liveMatchService: LiveMatchService, 
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._searchSubject.pipe(
      switchMap(summonerName => this._liveMatchService.getLiveMatch(summonerName)),
      takeUntil(this._ngUnsubscribe)
    )
    .subscribe(
      o => {
        this.liveMatch = o;
      },
      error => {
        console.log("Error trying to find summoner info", error);
      }
    );

    this._route.paramMap.subscribe(params => {
      const summonerName = params.get('summonerName');
      if (!summonerName) return;
      this._searchSubject.next(summonerName);
    });
  }
}
