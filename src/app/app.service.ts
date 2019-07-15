import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claim } from './claim/claim.model';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  public userData: Claim[] = [];

  constructor(private http: HttpClient) { }
  public getClaimData(): Observable<any> {
    return this.http.get('./assets/ClaimData.json');

  }
}

