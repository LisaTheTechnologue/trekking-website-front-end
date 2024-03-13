import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../storage/user-storage.service';

const BASIC_API = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient) { }

  addTrip(tripDto: any ): Observable<any>{
    return this.http.post(BASIC_API + 'trip', tripDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllTrips(): Observable<any>{
    return this.http.get(BASIC_API + 'trips')
  }

  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + UserStorageService.getToken()
    )
  }
}
