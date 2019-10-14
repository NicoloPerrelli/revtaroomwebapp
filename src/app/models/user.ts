import { Role } from './role';

export class User {
	id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;
    jwt: string;

    constructor(fn: string, ln: string, email: string, pw: string, id?:number, role?:Role, token?: string) {
        this.id = id || 0;
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.password = pw;
        this.role = role || new Role(3, 'USER');
        this.jwt = token || '';
    }
}