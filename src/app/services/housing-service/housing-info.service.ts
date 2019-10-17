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

	private encodeAddress(addr: Address) {
		let str = addr.streetAddress + " " +  addr.city + " " + addr.state + " United States";
		// str = encodeURIComponent(str);
		str = str.replace(new RegExp(" ", 'g'), "+");
		console.log(str);
		return str;
	}

	// Housing

	sendHousing(housing: HousingInfo) {
		let token = this.authService.getToken();
		return this.http.post(`${env.API_URL}/housing`, housing, { observe: 'response', headers: { "Authorization": token }});
	}

	// Room for Rent

	sendRoomForRent(housing: HousingInfo) {
		let token = this.authService.getToken();
		return this.http.post(`${env.API_URL}/rent-room`, housing, { observe: 'response', headers: { "Authorization": token }});
	}

	getRoomByUserId() {
		return this.http.get(`${env.API_URL}/rooms/userId`);
	}

}
