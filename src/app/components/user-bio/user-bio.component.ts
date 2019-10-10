import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

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

	constructor(private formBuilder: FormBuilder, private userService: UserService) {
		console.log("UserBioComponent instantiating...");
		console.log("UserBioComponent Finished");
	}

	ngOnInit() {
		console.log("In Bio ngOnInit");
		this.userBioForm = this.formBuilder.group({
			abtMe: [this.currentAbtMe],
			needToKnow: [this.currentNTK],
			gender: ['other']
			// showName: [false],
			// showEmail: [false],
			// showPhone: [false]
		})
		//check db for any pre existing bio info to fill the current* vars HERE
		console.log("Leaving Bio ngOnInit");
	}

	get fields() {
		return this.userBioForm.controls;
	}

	onSubmit = () => {
		console.log("Update Pressed");

		//ready to be sent if we have time!
		// let name=false,email=false,phone=false;
		// if(this.fields.showName.value){name=true;}
		// if(this.fields.showEmail.value){email=true;}
		// if(this.fields.showPhone.value){phone=true;}

		console.log("Sending to Service");
		this.userService.updateUser(
			this.fields.abtMe.value,
			this.fields.needToKnow.value,
			this.fields.gender.value
			//to be added later
			// name,email,phone
		).subscribe(
			(resp) => {
				console.log(resp);
			},
			(err) => {
				console.log("Problem in userBio.Component.ts");
				console.log(err);
			}
		);
	}
}
