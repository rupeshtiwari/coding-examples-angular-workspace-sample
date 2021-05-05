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
        firstName: 'Jonathan',
        lastName: 'Garvey',
        email: 'jon@gmail.coms',
        phone: '1234567890',
        title: 'Technical Lead',
        status: 1,
      },
      {
        id: '2',
        firstName: 'Bob',
        lastName: 'Jones',
        email: 'bob@bobjones.com',
        phone: '9372932391',
        title: 'CEO',
        status: 2,
      },
      {
        id: '3',
        firstName: 'Lukas',
        lastName: 'Ruebbelke',
        email: 'hey.player@gmail.com',
        phone: '9876543212',
        title: 'CEO',
        status: 1,
      },
      {
        id: '4',
        firstName: 'Sally',
        lastName: 'McBride',
        email: 'silly.sally@hotmail.com',
        phone: '3252352531',
        title: 'Receptionist',
        status: 3,
      },
      {
        id: '5',
        firstName: 'Donna',
        lastName: 'Barkley',
        email: 'donnab@aol.com',
        phone: '0192837475',
        title: 'Student',
        status: 4,
      },
      {
        id: '6',
        firstName: 'Larry',
        lastName: 'Fitzgerald',
        email: 'super.secret@gmail.com',
        phone: '1234432122',
        title: 'Quarterback',
        status: 4,
      },
      {
        id: '7',
        firstName: 'Victor',
        lastName: 'Wooten',
        email: 'w00t@victor.com',
        phone: '1888333992',
        title: 'Bassist',
        status: 1,
      },
      {
        id: '8',
        firstName: 'Chris',
        lastName: 'Take',
        email: 'crispy@gmail.com',
        phone: '9927381924',
        title: 'Developer',
        status: 1,
      },
      {
        id: '9',
        firstName: 'Christian',
        lastName: 'Peterson',
        email: 'cp3@lol.com',
        phone: '0099831234',
        title: 'Handyman',
        status: 3,
      },
      {
        id: '10',
        firstName: 'RIP',
        lastName: 'Stick',
        email: 'r.i.p@deadly.com',
        phone: '6123512311',
        title: 'Grim Reaper',
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
        title: 'New course in ngrx',
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
