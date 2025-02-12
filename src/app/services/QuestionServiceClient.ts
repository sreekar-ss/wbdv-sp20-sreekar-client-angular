import {Injectable} from '@angular/core';

@Injectable()
export class QuestionServiceClient {

  findQuestionsForQuiz = (quizId) =>
    fetch(`https://wbdv-sp20-sreekar-node-server2.herokuapp.com/api/quizzes/${quizId}/questions`)
      .then(response => response.json())

}
