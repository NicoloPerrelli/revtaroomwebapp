import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HousingInfo } from 'src/app/models/housing-info';

@Component({
  selector: 'app-announce-room-view',
  templateUrl: './announce-room-view.component.html',
  styleUrls: ['./announce-room-view.component.scss']
})
export class AnnounceRoomViewComponent implements OnInit {

	housings: HousingInfo[] = [];

	constructor(
		private router: Router
	) { }

	ngOnInit() {

	}

	goToRoom(housing?) {
		if(housing) this.router.navigate(["/dashboard/announce"], { queryParams: housing });
		else this.router.navigate(["/dashboard/announce"]);
	}

}
