import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Leaflet
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';

// Angular Material
import { MaterialModule } from './modules/material.module';

// Services
import { NavbarService } from './services/navbar-service/navbar.service';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserBioComponent } from './components/user-bio/user-bio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HousingInfoComponent } from './components/housing-info/housing-info.component';
import { MapComponent } from './components/map/map.component';
import { RegisterComponent } from './components/register/register.component';



const routes: Routes = [
	{ path: "login", component: LoginComponent },
	{ path: "dashboard", component: DashboardComponent, children: [
		{ path: "user-bio", component: UserBioComponent },
		{ path: "housing-info", component: HousingInfoComponent },
		{ path: "map", component: MapComponent }
	] },
	{ path: "", redirectTo: "login", pathMatch: "full" }
]

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		UserBioComponent,
		DashboardComponent,
		HousingInfoComponent,
		MapComponent,
		RegisterComponent
		
	],
	imports:[
		FormsModule,
		LeafletModule.forRoot(),
		LeafletMarkerClusterModule.forRoot(),
		BrowserModule,
		MaterialModule,
		HttpClientModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(routes)
	],
	providers:[
		NavbarService
	],
	bootstrap:[AppComponent]
})

export class AppModule { }
