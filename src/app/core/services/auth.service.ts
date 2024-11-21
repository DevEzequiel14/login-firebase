import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from '@angular/fire/auth';
import { User } from '../interfaces/user';
import { signInWithPopup } from '@firebase/auth';
import { signOut } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /* user authentication */
  getAuth() {
    return getAuth()
  }

  /* user registration */
  register(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  /* user login */
  login(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  /* user login with google */
  loginInGoogle() {
    return signInWithPopup(getAuth(), new GoogleAuthProvider())
  }
  /* user logout */
  logout() {
    return signOut(getAuth())
  }

  /* check if user is authenticated */
  isAuthenticated(): boolean {
    const user = getAuth().currentUser;
    return user !== null
  }
}
