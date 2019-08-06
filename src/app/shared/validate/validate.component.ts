import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {

  
  @Input() validations;
  @Output() closeWindow = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.closeWindow.emit();
  }

}
