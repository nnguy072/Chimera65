import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './auth/authentication.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthenticationModule,
    InfrastructureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
