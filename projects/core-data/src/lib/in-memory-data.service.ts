import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      {
        id: '1',
        firstName: 'Dharmadhrt',
        lastName: 'Ramila',
        email: 'dramila@gmail.coms',
        phone: '1234567890',
        title: 'Technical Lead',
        status: 1,
      },
      {
        id: '2',
        firstName: 'Gopa',
        lastName: 'Trilochana',
        email: 'gTrilochana@gopa.com',
        phone: '9372932391',
        title: 'CEO',
        status: 2,
      },
      {
        id: '3',
        firstName: 'Rupesh',
        lastName: 'Tiwari',
        email: 'rupesh.tiwari.info@gmail.com',
        phone: '6865436778',
        title: 'CEO',
        status: 1,
      },
      {
        id: '4',
        firstName: 'Nathaniel',
        lastName: 'Massey',
        email: 'nathaniel.massey@hotmail.com',
        phone: '3252352531',
        title: 'Receptionist',
        status: 3,
      },
      {
        id: '5',
        firstName: 'Macey',
        lastName: 'Chaney',
        email: 'macey@aol.com',
        phone: '0192837475',
        title: 'Student',
        status: 4,
      },
      {
        id: '6',
        firstName: 'Lilyana',
        lastName: 'Kirby',
        email: 'kirby.lilyana@gmail.com',
        phone: '1234432122',
        title: 'Quarterback',
        status: 4,
      },
      {
        id: '7',
        firstName: 'Arjun',
        lastName: 'Carpenter',
        email: 'aCarpenter@Carpenter.com',
        phone: '1888333992',
        title: 'Student',
        status: 1,
      },
      {
        id: '8',
        firstName: 'Taryn',
        lastName: 'Lara',
        email: 'Lara@gmail.com',
        phone: '9927381924',
        title: 'Developer',
        status: 1,
      },
      {
        id: '9',
        firstName: 'Kendrick',
        lastName: 'Evans',
        email: 'kevans@lol.com',
        phone: '0099831234',
        title: 'Student',
        status: 3,
      },
      {
        id: '10',
        firstName: 'Leanna',
        lastName: 'Moon',
        email: 'lmoon@moonleanna.com',
        phone: '6123512311',
        title: 'Student',
        status: 2,
      },
    ];
    const courses = [
      {
        id: 3,
        title: 'Angular',
        details: 'Create First App',
        percentComplete: 0,
        approved: true,
        studentId: '2',
        createDate: '2021-01-15T18:18:53.391Z',
      },
      {
        id: 4,
        title: 'RxJS',
        details: 'Learn Basic',
        percentComplete: 0,
        approved: true,
        studentId: '3',
        createDate: '2021-01-15T18:19:35.393Z',
      },
      {
        id: 5,
        title: 'NgRX Getting Started',
        details: 'beginners',
        percentComplete: 31,
        approved: true,
        studentId: '5',
        createDate: '2021-05-03T10:38:44.103Z',
      },
    ];
    return {
      courses,
      students,
    };
  }
  genId(models: any[]): number {
    return models.length > 0
      ? Math.max(...models.map((model) => model.id)) + 1
      : 11;
  }
}
