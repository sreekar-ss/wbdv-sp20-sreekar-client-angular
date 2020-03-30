import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {

  findCourseById = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/siddulas/courses/${courseId}`)
      .then(response => response.json())

  findAllCourses = () =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/siddulas/courses')
      .then(response => response.json())
}
