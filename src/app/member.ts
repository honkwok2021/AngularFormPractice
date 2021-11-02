export class Member {
    id!: number;
    firstName!: string;
    lastName!: string;
    phone!:string;
    email!:string;
    address!:{
        street: string;
        state: string;
        postCode: number;
    }
}
