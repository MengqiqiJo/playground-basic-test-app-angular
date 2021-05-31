import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api-service.service';
import { Item } from '../shared/item.model';
import { Questionnaire } from '../shared/questionnaire.model';
import { QuestionnaireResponse } from '../shared/questionnaireResponse.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  questionnaireJSON: Questionnaire;
  itemJson: Item[];
  questionnaireForm: FormGroup;
  fieldType = {
    "boolean": "radio",
    "string": "text",
    "date": "date"
  }
  setBooleanOptions = ["Yes", "No"];
  displayResult: any;

  constructor(private apiServer: ApiService) { }

  ngOnInit() {
    this.questionnaireForm = new FormGroup({});
    this.apiServer
      .getQuestionnaire()
      .subscribe((data: Questionnaire) => {
        this.questionnaireJSON = data;
        this.itemJson = data.item;
        this.itemJson.forEach(element => {
          if(element.type === "boolean") {
            this.questionnaireForm.addControl(element.linkId, new FormControl(null, Validators.required));
          }
          if(element.type === "group"){
            element.item.forEach(eachItem => {
              console.log(eachItem.linkId);
              if (eachItem.type === 'string') {
                this.questionnaireForm.addControl(eachItem.linkId, new FormControl(null, [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z][A-Z]*/)]))
              }
              if (eachItem.type === 'date') {
                this.questionnaireForm.addControl(eachItem.linkId, new FormControl(null, Validators.required),)
              }
              if (eachItem.type === 'boolean') {
                this.questionnaireForm.addControl(eachItem.linkId, new FormControl(null, Validators.required))
              }
            });
          }
        });

        this.questionnaireForm.setValue({
          '1': 'No',
          '2.1': 'female',
          '2.2': '2021-05-30',
          '2.3': 'canada',
          '2.4': 'single',
          '3.1': 'No',
          '3.2': 'Yes'
        });  
      });      
  }

  onSubmit() {
    this.setQuestionnaireResponse(this.questionnaireForm.value);
  }

  setQuestionnaireResponse(submitResult) {
    let response: QuestionnaireResponse = {
      resourceType: 'QuestionnaireResponse',
      identifier: this.questionnaireJSON.id,
      basedOn: this.questionnaireJSON.url,
      status: this.questionnaireJSON.status,
      subject: this.questionnaireJSON.subjectType,
    };
    response.item = this.itemJson;
    response.item.map((item) => {
      item.answer = submitResult[item.linkId];
      if (item.item) {
        item.item.map(x => x.answer = submitResult[x.linkId]);
      }
    })
    this.displayResult = response;
  }

}
