import { Injectable } from '@angular/core';
import {StorageMap} from '@ngx-pwa/local-storage';
import {Note} from '../model/Note';
import {Observable, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  isAuth: boolean;
  constructor(private storage: StorageMap) {
    this.isAuth = localStorage.getItem('isAuth') === 'true'; // convert to JWT
  }
  login(user, password)  {
    const loginObservable = new Observable(observer => {
      if (user === 'admin' && password === '1234') {
        localStorage.setItem('isAuth', 'true');
        this.isAuth = true;
        observer.next(true);
      }
    });
    return loginObservable;

  }
  public isAuthenticated(): boolean {
    return this.isAuth;
  }
}
