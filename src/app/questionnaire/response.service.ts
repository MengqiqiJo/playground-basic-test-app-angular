import { QuestionnaireResponse } from '../shared/questionnaireResponse.model';

export class ResponseService {
    private questionnaireResponse: QuestionnaireResponse[] = [];

    setQuestionnaireResponse(response: QuestionnaireResponse[]) {
        this.questionnaireResponse = response;
    }

    getQuestionnaireResponse() {
        return this.questionnaireResponse;
    }
}