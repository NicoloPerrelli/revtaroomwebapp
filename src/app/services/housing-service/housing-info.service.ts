import { Injectable } from '@angular/core';
import { UsStates } from '../../utils/us-states';
import { HttpClient } from '@angular/common/http';
import { HousingInfo } from 'src/app/models/housing-info';
import { environment as env } from '../../../environments/environment';
import { map } from 'rxjs/operators';
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

	sendHousing(housing: HousingInfo ) {
		let query = this.encodeAddress(housing.address);
		return this.http.get(`${env.GEO_CODE}${query}${env.GEO_CODE_KEY}`).pipe(map((res:any) => {
			console.log(res.results);
			
			// this.http.post(`${env.API_URL}/housing`,housing)
		}))
	}

	private encodeAddress(addr: Address) {
		let str = addr.streetAddress + ", " +  addr.city + ", " + addr.State + ", United States";
		str = encodeURIComponent(str);
		console.log(str);
		return str
	}

	

}
