import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  hide = true;

  signin = new FormGroup({
    Email : new FormControl(),
    passwd : new FormControl(),

  });

  constructor() { }

  ngOnInit() {
  }

}
