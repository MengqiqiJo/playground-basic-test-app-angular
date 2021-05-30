import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ApiService } from './services/api-service.service';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayResponseComponent } from './questionnaire/display-response/display-response.component'

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    DisplayResponseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
