import {Injectable} from '@angular/core';

@Injectable()
export class QuizzesServiceClient {

  findAllQuizzes = () =>
    fetch('https://wbdv-sp20-sreekar-node-server2.herokuapp.com/api/quizzes')
      .then(response => response.json())
}
