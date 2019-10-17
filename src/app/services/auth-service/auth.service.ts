import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Principal } from 'src/app/models/principal';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
	private currentUserSubject: BehaviorSubject<Principal>;
	currentUser$: Observable<Principal>;

	constructor(private http: HttpClient) {
		this.currentUserSubject = new BehaviorSubject<Principal>(null);
	    this.currentUser$ = this.currentUserSubject.asObservable();
	}

	authenticate(email, password): Observable<any> {
		let credentials = {email, password};
		return this.http.post(`${env.API_URL}/auth`, credentials, { observe: 'response'}).pipe(
			map(res => {
				let user = res.body as Principal;
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
				let user = res.body as Principal;
				console.log(user);
				this.saveToken(res.headers.get("Authorization"));
				this.currentUserSubject.next(user);
			})
		)
	}

	logout() {
		localStorage.removeItem("revtaToken");
	}


	saveToken(token: string) {
		localStorage.setItem('revtaToken', token);
	}

	getToken():string {
		return localStorage.getItem('revtaToken');
	}

	isAuthenticated(): boolean {
		const token = localStorage.getItem('revtaToken');
		// Check whether the token is expired and return
		// true or false
		if (token){
		return true;
		}
		return false;
	  }
	}

