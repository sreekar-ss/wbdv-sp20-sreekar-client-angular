import {Component, Input, OnInit} from '@angular/core';
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
  faCheck = faCheck; faTimes = faTimes;
  grading = false;
  ngOnInit(): void {
  }

}
