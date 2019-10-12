import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavbarService } from './services/navbar-service/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(private navbar: NavbarService) {

	}

	toggleSideNavbar() {
		this.navbar.navbarSubject.next();
	}

}
