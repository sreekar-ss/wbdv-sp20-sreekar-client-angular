import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleServiceClient} from '../services/ModuleServiceClient';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  modules = [
    {_id: '123', title: 'Module 1'},
    {_id: '231', title: 'Module 2'},
  ];
  courseId = '';
  moduleId = '';
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;

      fetch(`https://wbdv-generic-server.herokuapp.com/api/siddulas/courses/${this.courseId}/modules`)
        .then(response => response.json())
        .then(modules => this.modules = modules);
    });
  }

}
