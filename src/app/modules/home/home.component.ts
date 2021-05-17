import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public summonerName: string = "";
  public faSearch = faSearch;

  constructor(private _router: Router) { }

  getSummonerInfo(): void {
    if (this.summonerName.trim() === "") return;

    this._router.navigate(["live-match", this.summonerName]);
  }
}