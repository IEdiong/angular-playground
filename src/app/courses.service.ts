import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  getCourses() {
    return ['Discipleship', 'Giving', 'Tithing', 'Marriage'];
  }

  constructor() {}
}
