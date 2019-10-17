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
import { Guard }  from 'src/app/services/guard';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserBioComponent } from './components/user-bio/user-bio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HousingInfoComponent } from './components/housing-info/housing-info.component';
import { MapComponent } from './components/map/map.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { HousingFormComponent } from './blocks/housing-form/housing-form.component';
import { AnnounceRoomComponent } from './components/announce-room/announce-room.component';
import { AnnounceRoomViewComponent } from './components/announce-room-view/announce-room-view.component';

const routes: Routes = [
	{ path: "login", component: LoginComponent },
	{ path: "register", component: RegisterComponent },
	{ path: "dashboard", component: DashboardComponent, canActivate: [Guard], children: [
		{ path: "home", component: HomeComponent },
		{ path: "userBio", component: UserBioComponent },
		{ path: "map", component: MapComponent },
		{ path: "housing-info", component: HousingInfoComponent },
		{ path: "announce", component: AnnounceRoomComponent },
		{ path: "announcements", component: AnnounceRoomViewComponent },
		{ path: "", redirectTo: "home", pathMatch: "full" },
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
		RegisterComponent,
		HomeComponent,
		HousingFormComponent,
		AnnounceRoomComponent,
		AnnounceRoomViewComponent
		
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
		NavbarService,
		Guard

	],
	bootstrap:[AppComponent]
})

export class AppModule { }
