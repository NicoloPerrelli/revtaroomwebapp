import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar-service/navbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	opened: boolean = true;

	constructor(private navbar: NavbarService) {
		
	}

	ngOnInit() {
	}

	toggle() {
		console.log("Burguer");
		this.opened = !this.opened;
	}

	

}
