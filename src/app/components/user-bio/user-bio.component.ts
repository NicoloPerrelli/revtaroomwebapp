import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-user-bio',
  templateUrl: './user-bio.component.html',
  styleUrls: ['./user-bio.component.css']
})
export class UserBioComponent implements OnInit {
	userBioForm: 	FormGroup;
	errorTag=		false;
	username=		"Loading";
	currentAbtMe=	"Loading";
	currentNTK=		"Loading";
	trainingType=	"Loading";

	constructor(private formBuilder: FormBuilder, private userService: UserService) {
		console.log("UserBioComponent instantiating...");
		console.log("UserBioComponent Finished");
	}

	ngOnInit() {
		console.log("In Bio ngOnInit");
		this.userBioForm = this.formBuilder.group({
			abtMe: [this.currentAbtMe]
		})

		//check db for any pre existing bio info to fill the current* vars
		this.userService.getUserProfile().subscribe(
			(resp) => {
				console.log(resp);
				//username = resp.body;
				//currentAbtMe = resp.body;
			},
			(err) => {
				console.log("Problem in userBio.Component.ts on get");
				console.log(err);
			}
		)
		console.log("Leaving Bio ngOnInit");
	}

	get fields() {
		return this.userBioForm.controls;
	}

	onSubmit = () => {
		console.log("Update Pressed");
		console.log("Sending to Service");
		this.userService.updateUserProfile(
			this.fields.abtMe.value
		).subscribe(
			(resp) => {
				console.log(resp);
				
			},
			(err) => {
				console.log("Problem in userBio.Component.ts on submit");
				console.log(err);
			}
		);
	}
}
