import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = {_id: '', title: '', question: '', choices: [], answer: '', correct: ''};
  grading = false;
  faCheck = faCheck; faTimes = faTimes;
  @Input()
  answer = 'No Answer Yet';
  @Output()
  answerChanged = new EventEmitter<string>();
  submitAnswer = () => this.answerChanged.emit(this.answer);
  ngOnInit(): void {
  }

}
