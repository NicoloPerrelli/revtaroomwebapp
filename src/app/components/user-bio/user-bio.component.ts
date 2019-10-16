import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service/user.service';
import { UserBio } from 'src/app/models/user-bio';

@Component({
  selector: 'app-user-bio',
  templateUrl: './user-bio.component.html',
  styleUrls: ['./user-bio.component.css']
})
export class UserBioComponent implements OnInit {
	userBioForm: 	FormGroup;
	errorTag=		false;
	endThing;
	username=		"Loading";
	currentAbtMe;
	currentNTK=		"Loading";
	trainingType=	"Loading";

	constructor(private formBuilder: FormBuilder, private userService: UserService) {
		console.log("UserBioComponent instantiating...");
		console.log("UserBioComponent Finished");
	}

	ngOnInit() {
		console.log("In Bio ngOnInit");
		

		//check db for any pre existing bio info to fill the current* vars
		this.userService.getUserProfile().subscribe(
			(resp) => {
				console.log(resp);
				this.endThing = resp.body;
				this.currentAbtMe = (this.endThing.description);
				console.log(this.currentAbtMe);
				this.username = (this.endThing.user.username);
				console.log(this.username);
				this.trainingType = (this.endThing.trainingType.name)
			},
			(err) => {
				console.log("Problem in userBio.Component.ts on get");
				console.log(err);
			}
		)
		this.userBioForm = this.formBuilder.group({
			abtMe: [this.currentAbtMe]
		})
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
