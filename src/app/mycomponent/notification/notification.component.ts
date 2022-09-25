import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '#notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input() message: any

  constructor() { }

  ngOnInit(): void {
  }

  closeNotice(){
    this.message.message = ""
  }

}
