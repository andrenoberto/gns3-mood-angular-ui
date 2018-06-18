import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class Gns3ServerService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  createProject(name): Observable<any> {
    const body = {name};
    return this.http.post(environment.apiRootUrl + '/projects', name, this.httpOptions);
  }
}
