import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreBoardComponent } from './components/score-board/score-board.component';

@NgModule({
  declarations: [
    ScoreBoardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScoreBoardComponent
  ]
})
export class SharedModule { }
