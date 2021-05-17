import { CurrentMatchService } from './current-match.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-current-match',
  templateUrl: './current-match.component.html',
  styleUrls: ['./current-match.component.scss']
})
export class CurrentMatchComponent implements OnInit {
  private _ngUnsubscribe: Subject<void> = new Subject<void>();
  private _searchSubject = new Subject<string>();
  
  constructor(
    private _currentMatchService: CurrentMatchService, 
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._searchSubject.pipe(
      switchMap(summonerName => this._currentMatchService.getSummonerInfo(summonerName)),
      takeUntil(this._ngUnsubscribe)
    )
    .subscribe(
      o => {
        console.log("Results: ", o);
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
