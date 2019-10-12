import { Component, OnInit } from '@angular/core';
import { Validators } from 'src/app/utils/validators';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	email:string;
	emailError = false;
	password:string;
	passError = false;

	constructor(private validator: Validators, private authService: AuthService) { }

	ngOnInit() {
	}

	submitLogin() {
		// Validation
		this.emailError = !this.validator.email(this.email);
		this.passError = !this.validator.password(this.password);
		if(this.emailError || this.passError) return;

		// Send to server
		this.authService.authenticate(this.email, this.password)
		.subscribe((res) => {
			console.log(res);
			
		},
		(err) => {
			console.log(err);
			
		})
	}



}
