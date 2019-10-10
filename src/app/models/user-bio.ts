export class UserBio {
	id:number;
	userId:number;
	abtMe:string;
	NTK:string;
	gender:string;
	/*
	name:boolean;
	email:boolean;
	phone:boolean;
	*/

	constructor(userId:number, id?:number, abtMe?:string, NTK?:string, gender?:string){
		this.id = id || 0;
		this.userId = userId;
		this.abtMe = abtMe || "";
		this.NTK = NTK || "";
		this.gender = gender || "other";
		/*
		this.name = name ||
		this.email = email ||
		this.phone = phone ||
		*/
	}
}
