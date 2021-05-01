import { NgModule } from '@angular/core';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    SimpleLayoutComponent,
    FullLayoutComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule
  ]
})
export class InfrastructureModule { }
