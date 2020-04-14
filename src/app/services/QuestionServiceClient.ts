import {Injectable} from '@angular/core';

@Injectable()
export class QuestionServiceClient {

  findQuestionsForQuiz = (quizId) =>
    fetch(`http://localhost:3000/api/quizzes/${quizId}/questions`)
      .then(response => response.json())

}
