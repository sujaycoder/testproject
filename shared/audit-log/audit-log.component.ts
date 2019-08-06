import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.css']
})
export class AuditLogComponent implements OnInit {

  @Input() hasData;
  @Input() auditList;
  @Output() closeWindow = new EventEmitter();
  cols: any[];
  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'eventDate', header: 'Event Date' },
      { field: 'userName', header: 'User Name' },
      { field: 'comments', header: 'Comments' },
    ];
  
  }

  onClose() {
    this.closeWindow.emit();
  }
}
