import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreBoardComponent } from './components/score-board/score-board.component';
import { ScoreBoardTeamComponent } from './components/score-board/score-board-team/score-board-team.component';

@NgModule({
  declarations: [
    ScoreBoardComponent,
    ScoreBoardTeamComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScoreBoardComponent
  ]
})
export class SharedModule { }
