import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})

export class AuthorComponent implements OnInit {
  title = "List of Authors";
  authors;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}


// export class CourseComponent {
//   title = "List of courses";
//   courses;

//   constructor(service: CoursesService) {
//       this.courses = service.getCourses();
//   }
// }
