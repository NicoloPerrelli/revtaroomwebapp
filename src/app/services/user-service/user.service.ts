import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from '../../../environments/environment';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient) {}


	updateUser = (abtMe: string, NTK: string, gender: string 
		/*, name:boolean, email:boolean, phone:boolean */) => {
		let userBio = {abtMe, NTK, gender/*, name, email, phone */}
		console.log("Whats to be sent");
		console.log(userBio);
		return this.http.put(`${env.API_URL}/user-profile`, userBio,
		{headers: {"Authorization": localStorage.getItem('rbs-jwt')},
		observe: 'response'}).pipe(
			map(resp => {
				return resp;
			})
		);
	}

	// register(user: User) {
    //     return this.http.post(`${env.API_URL}/users/register`, user);
	// }
	
	register(email, firstName, lastName, password, username): Observable<any> {
		let values = {email, firstName, lastName, password, username};
		return this.http.post(`${env.API_URL}/users/register`, values, { observe: 'response'}).pipe(
			map(res => {
				let user = res.body as User;
				console.log(user);
			})
		)
	}
}
