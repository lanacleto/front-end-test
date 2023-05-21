import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>('your-database-api-url');
  }

  saveData(data: any): Observable<any> {
    return this.http.post<any>('your-database-api-url', data);
  }
}
