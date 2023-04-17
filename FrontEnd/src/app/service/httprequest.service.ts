import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttprequestService {

  constructor(private httpClient: HttpClient) { }

  public sendPostRequest(endpoint: string, json: Object): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/v1/' + endpoint, json);
  }
}
