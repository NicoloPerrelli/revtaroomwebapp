import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserBioComponent } from './components/user-bio/user-bio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

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
	imports:[
		MaterialModule,
		RouterModule.forRoot(routes),
		BrowserModule,
		BrowserAnimationsModule
	],
	providers:[],
	bootstrap:[AppComponent]
})

export class AppModule { }
