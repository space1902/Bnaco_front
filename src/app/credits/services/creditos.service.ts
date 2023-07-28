import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, of , map, delay, tap} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CreditService implements OnInit{

  private apiUrl = 'http://localhost:8585/v1.0';
  private apiToken = 'http://localhost:8585/v1.0/oauth/client_credential/accestoken?grant_type=client_credentials';

  //public CacheStore: String = "";

  constructor(private http: HttpClient) {

   }
  ngOnInit(): void {
  }
  /* saveToLocalStorage(): void {
    localStorage.setItem('CacheStore', JSON.stringify(this.CacheStore));
  } */

  getToken(): Observable<String> {
    const payload = new HttpParams()
    .set('client_id', "username")
    .set('client_secret', "password");

    const body = {
      client_id: 'myclient',
      client_secret: 'myclient'
    };
    return this.http.post<String>(this.apiToken, payload)
  }


  getCredits(auth_token:any): Observable<any> {
    console.log("aca esta esto", auth_token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer${auth_token}`
      })};

    return this.http.get<any>(this.apiUrl + '/listar', httpOptions);
  }
}
