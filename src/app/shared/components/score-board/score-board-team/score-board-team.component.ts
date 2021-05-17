import { ILiveMatchSummonerModel } from './../../../models/live-match.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-board-team',
  templateUrl: './score-board-team.component.html',
  styleUrls: ['./score-board-team.component.scss']
})
export class ScoreBoardTeamComponent implements OnInit {
  @Input() team: ILiveMatchSummonerModel[] = [];
  @Input() teamLabel: string = "Team";

  constructor() { }

  ngOnInit(): void {
  }
}
