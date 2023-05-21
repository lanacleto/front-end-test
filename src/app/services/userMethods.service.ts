import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/types/user.type';

@Injectable({
  providedIn: 'root'
})
export class UserMethodsService {
  private apiUrl = 'https://dev-api-plt.4asset.net.br/exam/v1/persons/';

  constructor(private http: HttpClient) {}
  getUsers(page: number) {
    const url = `${this.apiUrl}?page=${page}`;
    return this.http.get(url);
  }
  createUser(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  getById(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }
  updateUser(id: number, data: User):any {
    try {
      const url = `${this.apiUrl}${id}`; // If I don't change the e-mail, it just gives me an error
      return this.http.patch(url, data);
    } catch (error) {
      return error;
    }
  }
  deleteUser(id: number) {
    const url = `${this.apiUrl}${id}`;
    return this.http.delete(url);
  }
}
