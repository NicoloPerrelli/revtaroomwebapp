import { Injectable } from '@angular/core';
import { UsStates } from '../../utils/us-states';
import { HttpClient } from '@angular/common/http';
import { HousingInfo } from 'src/app/models/housing-info';
import { environment as env } from '../../../environments/environment';
// import { map } from 'rxjs/operators';
import { AuthService } from '../auth-service/auth.service';
import { Address } from 'src/app/models/address';


@Injectable({
  providedIn: 'root'
})
export class HousingInfoService {

	states = (new UsStates()).states;

	constructor(
		private authService: AuthService,
		private http: HttpClient)
	{
			
	}

	getCoordinates(housing: HousingInfo ) {
		let query = this.encodeAddress(housing.address);
		return this.http.get(`${env.GEO_CODE}${query}${env.GEO_CODE_KEY}`);
	}

	sendHousing(housing: HousingInfo) {
		let token = this.authService.getToken();
		token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIyMSIsInN1YiI6ImlhZ29AZ21haWwuY29tIiwiaXNzIjoicmV2YXR1cmUiLCJyb2xlIjoiUm9sZSBbcm9sZUlkPTMsIHJvbGVOYW1lPVVTRVJdIiwiaWF0IjoxNTcxMTk1MTYxLCJleHAiOjE1NzEyODE1NjF9.HRNmQ2fhcD7cHQbfv4JwjB50TuAGgbAAzsaxPDuOLSIzB6Gtr84LeFKD_YtpbkwAAZwlJbVOLtKRNy6zKtGEqw"
		return this.http.post(`${env.API_URL}/housing`, housing, { observe: 'response', headers: { "Authorization": token }})
		.toPromise()
	}

	private encodeAddress(addr: Address) {
		let str = addr.streetAddress + " " +  addr.city + " " + addr.state + " United States";
		// str = encodeURIComponent(str);
		str = str.replace(new RegExp(" ", 'g'), "+");
		console.log(str);
		return str
	}

	

}
