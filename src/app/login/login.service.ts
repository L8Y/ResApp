import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationStatus } from '../AuthenticationStatus.model';
import { Login } from './login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private httpClient: HttpClient) {}
  
  public loginAdminFromRemote(login:Login):Observable<any>{
    return this.httpClient.post<any>("",login)
 }

   

}
