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
import { MapComponent } from './components/map/map.component';
import { LoginComponent } from './components/login/login.component';
import { EmailComponent } from './components/email/email.component';
import { UserBioComponent } from './components/user-bio/user-bio.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HousingInfoComponent } from './components/housing-info/housing-info.component';
<<<<<<< HEAD

=======
import { MapComponent } from './components/map/map.component';
import { RegisterComponent } from './components/register/register.component';
import { Guard }  from 'src/app/services/guard';
>>>>>>> 3a96ccbf6912090f4aa2a2febf455b753d875115


const routes: Routes = [
	{ path: "login", component: LoginComponent },
	{ path: "email", component: EmailComponent },
	{ path: "register", component: RegisterComponent },
<<<<<<< HEAD
	{ path: "dashboard", component: DashboardComponent, children: [
		{ path: "map", component: MapComponent },
		{ path: "user-bio", component: UserBioComponent },
		{ path: "housing-info", component: HousingInfoComponent }
=======
	{ path: "dashboard", component: DashboardComponent, canActivate: [Guard], children: [
		{ path: "userBio", component: UserBioComponent },
		{ path: "housing-info", component: HousingInfoComponent },
		{ path: "map", component: MapComponent }
>>>>>>> 3a96ccbf6912090f4aa2a2febf455b753d875115
	] },
	{ path: "", redirectTo: "login", pathMatch: "full" }
]

@NgModule({
	declarations: [
		MapComponent,
		AppComponent,
		LoginComponent,
		EmailComponent,
		UserBioComponent,
		RegisterComponent,
		DashboardComponent,
		HousingInfoComponent
	],
	imports:[
		FormsModule,
		BrowserModule,
		MaterialModule,
		HttpClientModule,
		ReactiveFormsModule,
		LeafletModule.forRoot(),
		BrowserAnimationsModule,
		RouterModule.forRoot(routes),
		LeafletMarkerClusterModule.forRoot()
	],
	providers:[
		NavbarService,
		Guard

	],
	bootstrap:[AppComponent]
})

export class AppModule { }
