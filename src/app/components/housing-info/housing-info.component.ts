import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HousingInfoService } from '../../services/housing-service/housing-info.service';
import { Address } from 'src/app/models/address';
import { HousingInfo } from 'src/app/models/housing-info';

@Component({
  selector: 'app-housing-info',
  templateUrl: './housing-info.component.html',
  styleUrls: ['./housing-info.component.scss']
})
export class HousingInfoComponent implements OnInit {

	housingForm: FormGroup;
	showForm:boolean = false;

	constructor(
		private housingService: HousingInfoService,
		private formBuilder: FormBuilder)
	{
		
	}

	ngOnInit() {
		this.housingForm = this.formBuilder.group({
			pricePerMonth: ['',Validators.required],
			description: [''],
			streetAddress: ['', Validators.required],
			houseNumber: [''],
			city: ['',Validators.required],
			state: ['', Validators.required],
			zipCode: ['']
		})
		console.log(this.housingForm);
		
		this.showForm = true;
	}

	get fields() {
		return this.housingForm.controls;
	}

	onSubmit() {
		if(this.housingForm.invalid) return;
		console.log("Submitted form");

		let addr: Address = {
			streetAddress: this.fields.streetAddress.value,
			houseNumber: this.fields.houseNumber.value,
			city: this.fields.city.value,
			state: this.fields.state.value,
			zipCode: this.fields.zipCode.value,
			latitude: null,
			longitude: null
		}

		let housing: HousingInfo = {
			pricePerMonth: this.fields.pricePerMonth.value,
			description: this.fields.description.value,
			address: addr
		}

		this.housingService.getCoordinates(housing)
		.subscribe((res:any) => {
			console.log(res.results);
			let coords = res.results[0].geometry;
			housing.address.latitude = coords.lat + "";
			housing.address.longitude = coords.lng + "";

			this.housingService.sendHousing(housing).then((res) => {
				console.log(res);
			})

		}, (err) => {
			console.log(err);
		});
	}

}
