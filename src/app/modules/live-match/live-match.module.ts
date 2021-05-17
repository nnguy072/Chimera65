import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveMatchComponent } from './live-match.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LiveMatchComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LiveMatchModule { }
