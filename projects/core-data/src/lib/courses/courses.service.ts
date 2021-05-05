import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { emptyCourse } from '.';
import { NotificationsService } from '../notifications/notification.service';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  model = 'courses';
  private _courses$ = new BehaviorSubject<Course[]>([emptyCourse]);
  constructor(
    private http: HttpClient,
    private notificationsService: NotificationsService
  ) {}

  get baseApi(): string {
    return `${environment.apiEndpoint}${this.model}`;
  }

  getUrlForId(id: string) {
    return `${this.baseApi}/${id}`;
  }

  all() {
    this.http
      .get<Course[]>(`${this.baseApi}`)
      .pipe(
        switchMap((x) => {
          this._courses$.next(x);
          return of(x);
        })
      )
      .subscribe();
    return this._courses$.asObservable();
  }

  load(id: string) {
    return this.http.get<Course>(this.getUrlForId(id));
  }

  loadByStudent(studentId: string) {
    return this.http
      .get<Course[]>(this.baseApi, { params: { studentId } })
      .pipe(
        switchMap((courses) => {
          if (courses.length) {
            return of(courses);
          } else {
            return throwError(
              `No courses exist for student with ID ${studentId}`
            );
          }
        }),
        catchError((error) => {
          this.notificationsService.show(error);

          return throwError(error);
        })
      );
  }

  create(course: Course) {
    return this.http.post(this.baseApi, course).pipe(
      switchMap((x: Course) => {
        this._courses$.next([x,...this._courses$.value]);
        return of(x);
      })
    );
  }

  update(course: Course) {
    return this.http.patch(this.getUrlForId(course.id), course);
  }

  delete(course: Course) {
    return this.http.delete(this.getUrlForId(course.id));
  }
}
