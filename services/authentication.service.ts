import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { AppConstants } from '../consts/app.consts';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  login(loginPayload): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(AppConstants.GenerateToken, loginPayload);
  }
}
