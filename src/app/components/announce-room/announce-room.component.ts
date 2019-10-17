import { Component, OnInit } from '@angular/core';
import { HousingInfoService } from 'src/app/services/housing-service/housing-info.service';
import { HousingInfo } from 'src/app/models/housing-info';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-announce-room',
  templateUrl: './announce-room.component.html',
  styleUrls: ['./announce-room.component.scss']
})
export class AnnounceRoomComponent implements OnInit {

	housingToView: any;
	edit: boolean = true;

	constructor(
		private route: ActivatedRoute,
		private housingService: HousingInfoService) { }

	ngOnInit() {
		this.route.queryParams.subscribe((housing) => {
			console.log("In AnnounceRoomComponent...");
			console.log("Housing", housing);
			this.housingToView = housing;
			this.edit = false;
		});
	}

	onSubmit(housing: HousingInfo) {

		this.housingService.getCoordinates(housing)
		.subscribe((res:any) => {
			console.log(res.results);
			let coords = res.results[0].geometry;
			housing.address.latitude = coords.lat + "";
			housing.address.longitude = coords.lng + "";

			this.housingService.sendRoomForRent(housing).subscribe(
			(res) => {
				console.log(res);
			}, err => {
				console.log(err);
			});

		}, (err) => {
			console.log(err);
		});
	}

}
