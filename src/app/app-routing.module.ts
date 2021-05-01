import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './infrastructure/layouts/full-layout.component';
import { SimpleLayoutComponent } from './infrastructure/layouts/simple-layout.component';
import { HomeComponent } from './modules/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: FullLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "home",
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "auth",
    component: SimpleLayoutComponent,
    loadChildren: () => import("./auth/authentication.module").then(m => m.AuthenticationModule)
  },
  {
    path: "**",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
