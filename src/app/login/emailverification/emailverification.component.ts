import { Component, OnInit } from '@angular/core';
import { Signupdata } from 'src/app/model/signupdata';

@Component({
  selector: 'app-emailverification',
  templateUrl: './emailverification.component.html',
  styleUrls: ['./emailverification.component.css'],
  providers:[Signupdata]
})
export class EmailverificationComponent implements OnInit {

  constructor(private data: Signupdata) {

   }

  ngOnInit() {
    console.log(this.data.email);
  }

}
