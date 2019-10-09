import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-bio',
  templateUrl: './user-bio.component.html',
  styleUrls: ['./user-bio.component.css']
})
export class UserBioComponent implements OnInit {
	userBioForm: FormGroup;
	errorTag=false;
	username = "userStandIn";
	currentAbtMe="";
	currentNTK="Alergic to peanuts";

	constructor(private formBuilder: FormBuilder) {
		console.log("UserBioComponent instantiating...");
		
		console.log("UserBioComponent Finished");
	}

	ngOnInit() {
		console.log("In Bio ngOnInit");
		this.userBioForm = this.formBuilder.group({
			abtMe: [''],
			needToKnow: [''],
			gender: [''],
			showName: [''],
			showEmail: [''],
			showPhone: ['']
		})
		//check db for any pre existing bio info to fill the current* vars
		
		console.log("Leaving Bio ngOnInit");
	}

	get fields() {
		return this.userBioForm.controls;
	}
}
