export class QuestionnaireResponse {
  resourceType: string;
  identifier: string;
  basedOn?: any;
  partOf?: any;
  questionnaire?: any;
  status: string;
  subject: any;
  encounter?: any;
  authored?: string;
  author?: any;
  source?: any;
  item?: ResponseItem[];
  // constructor(
  //   resourceType, 
  //   identifier, 
  //   basedOn, 
  //   partOf, 
  //   questionnaire, 
  //   status, 
  //   subject, 
  //   encounter, 
  //   authored, 
  //   author, 
  //   source, 
  //   item
  // ) {
  //   this.resourceType = resourceType;
  //   this.identifier = identifier;
  //   this.basedOn = basedOn;
  //   this.partOf = partOf;
  //   this.questionnaire = questionnaire;
  //   this.status = status;
  //   this.subject = subject;
  //   this.encounter = encounter;
  //   this.authored = authored;
  //   this.author = author;
  //   this.source = source;
  //   this.item = item;
  // }
}

export class ResponseItem {
  linkId: string;
  definition?: string;
  text: string;
  answer?: {
    valueBoolean?: boolean;
    valueDecimal?: string;
    valueInteger?: string;
    valueDate?: Date;
    valueDateTime?: string;
    valueTime?: string;
    valueString?: string;
    valueUri?: string;
    valueAttachment?: any;
    valueCoding?: any;
    valueQuantity?: any;
    valueReference?: any;
    item?: ResponseItem[];
  };
  item?: ResponseItem[];
}