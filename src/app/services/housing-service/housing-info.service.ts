import { Injectable } from '@angular/core';
import { UsStates } from '../../utils/us-states';

@Injectable({
  providedIn: 'root'
})
export class HousingInfoService {

	states = (new UsStates()).states;

	constructor() {
		this.states
	}

	

}
