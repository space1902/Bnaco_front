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

  getToken(): Observable<any> {
    const payload = new HttpParams()
    .set('client_id', "username")
    .set('client_secret', "password");

    return this.http.post<any>(this.apiToken, payload)
  }

  private createRequestOptions(auth_token:any) {

    console.log("aca esta esto55", auth_token);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return headers;
  }

  getCredits(auth_token:any): Observable<any> {

    let options = this.createRequestOptions(auth_token);
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${auth_token}`
      })}; */

      console.log("aca esta esto3", this.apiUrl + '/listar', { headers: options });

    return this.http.get<any>(this.apiUrl + '/listar', { headers: options });
  }

  saveCredit(form:any, auth_token:any): Observable<any> {
    console.log("envio ", form);
    let options = this.createRequestOptions(auth_token);
    return this.http.post<any>(this.apiUrl + '/guardar', form, { headers: options });
  }

  calcular(monto:any, plazomeses:any, inter:any): Observable<any> {
    console.log(this.apiUrl + '/calcular' + '/' + monto + '/' + plazomeses + '/' + inter)
    return this.http.get<any>(this.apiUrl + '/calcular' + '/' + monto + '/' + plazomeses + '/' + inter);
  }
}
