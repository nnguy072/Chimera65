import { NgModule } from '@angular/core';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout.component';

@NgModule({
  declarations: [
    SimpleLayoutComponent,
    FullLayoutComponent
  ],
  imports: [
    RouterModule
  ]
})
export class InfrastructureModule { }
