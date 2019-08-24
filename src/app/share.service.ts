import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private http: HttpClient) { }
  url = 'https://restcountries.eu/rest/v2/';

jsonData: any;
  getCountries() {
    return this.http.get<any>(this.url + 'all/?fields=name;callingCodes').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  gettingSelectedCountry(code) {
    return this.http.get<any>(this.url + 'callingcode/' + code).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  gettingtReisterFormData(data) {
    console.log(data);
    this.jsonData = data;
    localStorage.setItem('email', data.email);
    localStorage.setItem('password', data.password);
  }

// ------------Handle error common function-----------//
  handleError(error) {
    let errorMessage = {};
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = {Error: error.error.message};
    } else {
      // server-side error
      errorMessage = {Message: error.message};
      // errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



}
