import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''};
  @Input()
  answer = 'No Answer Yet';
  @Output()
  answerChanged = new EventEmitter<string>();
  faCheck = faCheck; faTimes = faTimes;
  grading = false;
  submitAnswer = () => this.answerChanged.emit(this.answer);
  ngOnInit(): void {
  }

}
