import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private router: Router) { }
    stateChange$ = new BehaviorSubject(this.isLoggedIn() ? 'loggedIn' : 'loggedOut');

    login(username: string, password: string) {
        const user = {
            username: username
        };

        localStorage.setItem('currentUser', JSON.stringify(user));
        this.stateChange$.next('loggedIn');
        return of(user);
    }

    isLoggedIn() {
        return !!localStorage.getItem('currentUser');
    }

    currentUser() {
        return localStorage.getItem('currentUser');
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.stateChange$.next('loggedOut');
        this.router.navigate([this.router.url]);
    }
}
