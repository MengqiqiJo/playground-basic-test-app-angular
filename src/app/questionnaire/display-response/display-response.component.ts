import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../response.service';
import { QuestionnaireResponse } from '../../shared/questionnaireResponse.model';

@Component({
  selector: 'app-display-response',
  templateUrl: './display-response.component.html',
  styleUrls: ['./display-response.component.scss']
})
export class DisplayResponseComponent implements OnInit {
  response: QuestionnaireResponse[] = [];

  constructor(private responseService: ResponseService) { }

  ngOnInit(): void {
    this.response = this.responseService.getQuestionnaireResponse();
    console.log(this.response);
  }

}
