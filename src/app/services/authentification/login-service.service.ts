import { Injectable } from '@angular/core';
import { User } from '../../models/user/User';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  sendUser(user: User): Promise<User> {
    console.log("send user");
    return new Promise(resolve => {
      setTimeout(() => resolve(new User(user.email, user.password, "ADMIN")), 1000);
    });
  }
}
