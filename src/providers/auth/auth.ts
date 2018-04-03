import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import firebase from 'firebase'
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor() {}

  loginUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password). then((newUser) => {
      firebase.database().ref('/UserProfile').child(newUser.uid).set({
        email: email
      });
    });
  }

  resetPassword(email: string): Promise<any> {
    return firebase.auth().sendPasswordResetEmail(email);
  }
  logoutUser(): Promise<any> {
    return firebase.auth().signOut();
  }

}
