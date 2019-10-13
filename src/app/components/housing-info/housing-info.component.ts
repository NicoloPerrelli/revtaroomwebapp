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
		private housingInfoService: HousingInfoService,
		private formBuilder: FormBuilder)
	{
		
	}

	ngOnInit() {
		this.formBuilder.group({
			pricePerMonth: ['',Validators.required],
			description: [''],
			streetName: [''],
			houseNumber: [''],
			city: ['',Validators.required],
			State: ['', Validators.required],
			zipCode: ['',Validators.required]
		})
		this.showForm = true;
	}

	get fields() {
		return this.housingForm.controls;
	}

	onSubmit() {
		
	}

}
