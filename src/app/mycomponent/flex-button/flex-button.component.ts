import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-button',
  templateUrl: './flex-button.component.html',
  styleUrls: ['./flex-button.component.css']
})
export class FlexButtonComponent implements OnInit {

  @Input() active: boolean | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
