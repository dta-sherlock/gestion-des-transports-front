export class User {
    email: string;
    password: string;
    userType: string;

    constructor(email: string, password: string, userType?: string) {
        this.email = email;
        this.password = password;
        if (userType) {
            this.userType = userType;
        }
    }
}