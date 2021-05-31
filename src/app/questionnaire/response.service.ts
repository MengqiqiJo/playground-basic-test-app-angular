import { QuestionnaireResponse } from '../shared/questionnaireResponse.model';

export class ResponseService {
    private questionnaireResponse: any;

    setQuestionnaireResponse(response: any) {
        this.questionnaireResponse = response;
    }

    getQuestionnaireResponse() {
        return this.questionnaireResponse;
    }

    getStringExample() {
        return "get example";
    }
}