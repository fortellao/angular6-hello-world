import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  isActive = true;
  title = "List of courses";
  courses = ["course1", "course2", "course3"];

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
