import { TrainingType } from './training-type';

export class UserBio {
	id:number;
	abtMe:string;
	trainType: TrainingType;

	constructor(id:number, abtMe?:string, train?:TrainingType){
		this.id = id || 0;
		this.abtMe = abtMe || "";
		this.trainType = train || new TrainingType(1,'JAVA');
	}
}
