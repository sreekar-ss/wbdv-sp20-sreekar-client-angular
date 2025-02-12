import {Injectable} from '@angular/core';


@Injectable()
export class ModuleServiceClient {

  findModulesForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/siddulas/courses/${courseId}/modules`)
      .then(response => response.json())
}
