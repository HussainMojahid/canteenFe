import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PeopleCountService {
  counts: number = -1;

  constructor(private http: HttpClient) {}

  getPeopleCount() {
    return this.http.get<any>(`${environment.apiUrl}peopler-counts`);
  }
}
