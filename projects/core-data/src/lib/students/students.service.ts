import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  model = 'students';

  constructor(private http: HttpClient) {}

  get baseApi() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  getUrlForId(id: string) {
    return `${this.baseApi}/${id}`;
  }

  all(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseApi);
  }

  load(id: string) {
    return this.http.get<Student>(this.getUrlForId(id));
  }

  create(student: Student) {
    return this.http.post(this.baseApi, student);
  }

  update(student: Student) {
    return this.http.patch(this.baseApi, student);
  }

  delete(student: Student) {
    return this.http.delete(this.getUrlForId(student.id));
  }
}
