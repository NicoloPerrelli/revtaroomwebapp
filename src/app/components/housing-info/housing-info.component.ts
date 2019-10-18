import { Component, OnInit } from '@angular/core';
import { HousingInfoService } from '../../services/housing-service/housing-info.service';
import { HousingInfo } from 'src/app/models/housing-info';

@Component({
  selector: 'app-housing-info',
  templateUrl: './housing-info.component.html',
  styleUrls: ['./housing-info.component.scss']
})
export class HousingInfoComponent implements OnInit {

	constructor(private housingService: HousingInfoService) {

	}

	ngOnInit() {
		
	}

	onSubmit(housing: HousingInfo) {

		console.log(housing);

		this.housingService.getCoordinates(housing)
		.subscribe((res:any) => {
			console.log(res.results);
			let coords = res.results[0].geometry;
			housing.address.latitude = coords.lat + "";
			housing.address.longitude = coords.lng + "";

			this.housingService.sendHousing(housing).subscribe(
			(res) => {
				console.log(res);
				alert("Housing was successfully added!");
			}, err => {
				console.log(err);
				alert("Some error happened. Please try again later.");
			});

		}, (err) => {
			console.log(err);
		});
	}

}
