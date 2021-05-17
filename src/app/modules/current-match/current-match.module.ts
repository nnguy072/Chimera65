import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentMatchComponent } from './current-match.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CurrentMatchComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CurrentMatchModule { }
