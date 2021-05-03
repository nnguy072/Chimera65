import { Component, OnDestroy, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Subject } from 'rxjs';
import { HomeService } from './home.service';
import { switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private _ngUnsubscribe: Subject<void> = new Subject<void>();
  private _searchSubject = new Subject<void>();
  public summonerName: string = "";
  public faSearch = faSearch;

  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
    this._searchSubject.pipe(
        switchMap(() => {
          return this._homeService
            .getSummonerInfo(this.summonerName)
            .pipe(takeUntil(this._ngUnsubscribe));
          }
      )
    )
    .subscribe(o => {
      console.log(o);
    });
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }

  test(): void {
    if (this.summonerName.trim() === "") return;

    this._searchSubject.next();
  }

  getSummonerInfo(): void {
    if (this.summonerName.trim() === "") return;

    this._searchSubject.next();
  }
}