import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HousingInfo } from 'src/app/models/housing-info';
import { HousingInfoService } from 'src/app/services/housing-service/housing-info.service';

@Component({
  selector: 'app-announce-room-view',
  templateUrl: './announce-room-view.component.html',
  styleUrls: ['./announce-room-view.component.scss']
})
export class AnnounceRoomViewComponent implements OnInit {

	housings: HousingInfo[] = [];

	constructor(
		private housingService: HousingInfoService,
		private router: Router
	) { }

	ngOnInit() {
		// Get rooms by id
	}

	goToRoom(housing?) {
		if(housing) this.router.navigate(["/dashboard/announce"], { queryParams: housing });
		else this.router.navigate(["/dashboard/announce"]);
	}

}
