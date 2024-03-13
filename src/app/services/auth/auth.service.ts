import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserStorageService } from '../storage/user-storage.service';

const AUTH_API = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient,
    private userStorageService: UserStorageService) { }

  register(registerRequest: any): Observable<any> {
    return this.http.post(AUTH_API + 'register', registerRequest);
  }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { username, password };

    return this.http.post(
      AUTH_API + 'authenticate', body, { headers, observe: 'response' }).pipe(
        map((res) => {
          const token = res.headers.get('authorization')?.substring(7);
          const user = res.body;
          if (token && user) {
            this.userStorageService.saveToken(token);
            this.userStorageService.saveUser(user);
            return true;
          }
          return false;
        })
      )
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', {});
  }
}
