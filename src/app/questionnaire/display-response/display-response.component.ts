import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-response',
  templateUrl: './display-response.component.html',
  styleUrls: ['./display-response.component.scss'],
})
export class DisplayResponseComponent implements OnInit {
  @Input() displayResponse: any;
  constructor() { }

  ngOnInit(): void {
    console.log("response");
    console.log(typeof(this.displayResponse));
  }

}
