// <!-- /*
// * File: students.component.ts
// * Author: Serényi Ödön
// * Copyright: 2023,  Serényi Ödön
// * Group: Szoft II N
// * Date: 2023-03-07
// * Github: https://github.com/OneBoyTwoGirl/
// * Licenc: GNU GPL
// */ -->

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit{
  
  constructor(private api: ApiService){}
  ngOnInit(): void {
   this.getStudents();
   this.getScores();
  }

  students!:any;
  getStudents(){
    this.api.getStudents().subscribe({
      next: data => {
        this.students = data;
        console.log(this.students);
      }
    })
  }

  scores!:any;
  getScores(){
    this.api.getScores().subscribe({
      next:data=>{
        this.scores = data;
        console.log(this.scores);
      }
    })
  }

}
