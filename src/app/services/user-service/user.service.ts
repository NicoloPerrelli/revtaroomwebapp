import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from '../../../environments/environment';
import { User } from 'src/app/models/user';

@Injectable({
  	providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient) {}
	getUserProfile = () => {
		console.log("userService getUserProfile called");
		return this.http.get(`${env.API_URL}/user-profile`,
		{headers: {"Authorization": localStorage.getItem('rbs-jwt')},
		observe: 'response'}).pipe(
			map(resp => {
				return resp;
			})
		);
	}

	updateUserProfile = (abtMe: string) => {
		let userProfile = {abtMe}
		console.log("Whats to be sent");
		console.log(userProfile);
		return this.http.put(`${env.API_URL}/user-profile`, userProfile,
		{headers: {"Authorization": localStorage.getItem('rbs-jwt')},
		observe: 'response'}).pipe(
			map(resp => {
				return resp;
			})
		);
	}

	register(user: User) {
        return this.http.post(`${env.API_URL}/users/register`, user);
    }
}
