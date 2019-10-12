import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { Credentials } from 'src/app/models/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private currentUserSubject: BehaviorSubject<User>;
	currentUser$: Observable<User>;

	constructor(private http: HttpClient) {
		this.currentUserSubject = new BehaviorSubject<User>(null);
	    this.currentUser$ = this.currentUserSubject.asObservable();
	}

	authenticate(email, password): Observable<any> {
		let credentials = new Credentials(email, password);
		return this.http.post(`${env.API_URL}/auth`, credentials, { observe: 'response'}).pipe(
			map(res => {
				let user = res.body as User;
				console.log(user);
				this.saveToken(res.headers.get("Authorization"));
				this.currentUserSubject.next(user);
			})
		)
	}

	authToken(): Observable<any> {
		let token = this.getToken();
		if(!token) return new Observable((subscriber) => subscriber.error());
		return this.http.post(`${env.API_URL}/auth`, {}, { observe: 'response', headers: { "Authorization": token }}).pipe(
			map(res => {
				let user = res.body as User;
				console.log(user);
				this.saveToken(res.headers.get("Authorization"));
				this.currentUserSubject.next(user);
			})
		)
	}

	logout() {
		localStorage.removeItem("reimbToken");
	}


	saveToken(token: string) {
		localStorage.setItem("reimbToken", token);
	}

	getToken():string {
		return localStorage.getItem("reimbToken");
	}

}
