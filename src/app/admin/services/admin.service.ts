import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/services/storage/user-storage.service';

const BASIC_API = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addDestination(destinationDto: any ): Observable<any>{
    return this.http.post(BASIC_API + 'admin/destination', destinationDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllDestinations(): Observable<any>{
    return this.http.get(BASIC_API + 'admin/destinations', {
      headers: this.createAuthorizationHeader(),
    })
  }

  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + UserStorageService.getToken()
    )
  }
}
