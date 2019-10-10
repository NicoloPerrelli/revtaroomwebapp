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
	username = "Iago";
	currentAbtMe="";
	currentNTK="Alergic to peanuts";

	constructor(private formBuilder: FormBuilder) {
		console.log("UserBioComponent instantiating...");
		
		console.log("UserBioComponent Finished");
	}

	ngOnInit() {
		console.log("In Bio ngOnInit");
		this.userBioForm = this.formBuilder.group({
			abtMe: [this.currentAbtMe],
			needToKnow: [this.currentNTK],
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
	onSubmit = () => {
		console.log("Update Pressed");
		console.log("Getting Form Data On Page");
		let name=false,email=false,phone=false;
		if(this.fields.showName.value){name=true;}
		if(this.fields.showEmail.value){email=true;}
		if(this.fields.showPhone.value){phone=true;}

		let thing = ([
			this.fields.abtMe.value,
			this.fields.needToKnow.value,
			this.fields.gender.value,
			name,email,phone
		]);
		console.log(thing);
			
	}

}
