import {Injectable} from '@angular/core';

@Injectable()
export class QuizzesServiceClient {

  findAllQuizzes = () =>
    fetch('https://wbdv-sp20-sreekar-server-node.herokuapp.com/api/quizzes')
      .then(response => response.json())
}
