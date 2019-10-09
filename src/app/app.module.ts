import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Angular Material
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserBioComponent } from './components/dashboard/UserBioComponent';

const routes: Routes = [
	{ path: "login", component: LoginComponent },
	{ path: "dashboard", component: DashboardComponent },
	{ path: "userBio", component: UserBioComponent },
	{ path: "", redirectTo: "login", pathMatch: "full" }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
	 DashboardComponent,
	 UserBioComponent
  ],
  imports: [
	MaterialModule,
	RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
