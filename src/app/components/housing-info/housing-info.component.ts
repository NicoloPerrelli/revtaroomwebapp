import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HousingInfoService } from '../../services/housing-service/housing-info.service';

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
			zipCode: ['',Validators.required]
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

		let housing: any = {
			streetAddress: this.fields.streetAddress.value,
			houseNumber: this.fields.houseNumber.value,
			city: this.fields.city.value,
			state: this.fields.state.value,
			zipCode: this.fields.zipCode.value,
			pricePerMonth: this.fields.pricePerMonth.value,
			description: this.fields.description.value
		}

		this.housingService.sendHousing(housing);
	}

}
