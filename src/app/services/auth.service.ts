import { Injectable } from '@angular/core';
import { AppConfig } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private pathApi = this.config.setting['pathApi'] + "auth/";

  constructor(private config: AppConfig, private http: HttpClient, private toastr: ToastrService) { }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    return token;
  }

  // identity endpoints
  logoutIdentity(): Observable<any> {
    return this.http.post(this.pathApi + "logoutIdentity",null, {withCredentials: true});
  }

  loginIdentity() : Observable<string> {
    this.logoutIdentity().subscribe(
      (x)=>{
        return this.http.get(this.pathApi + 'identityLogin', { responseType: 'text' });
      },
      (error) => {
        this.toastr.error('An error ocurred.');
      }
      );
    return this.http.get(this.pathApi + 'identityLogin', { responseType: 'text' });
  }
  loginLocal(email : string)
  {
    return this.http.get(this.pathApi + 'localLogin/'+email);
  }
}
