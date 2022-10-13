// it is use to map json or entity class 
export class Login {
    constructor(
        public emailid:string,
        public password:string,
        public typeOfUser:string,
        public name: string,
        public home_address: string,
        public contact: number,
        public gender: string
        ){

    }
}
