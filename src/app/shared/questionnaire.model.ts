import { Item } from './item.model';

export class Questionnaire {
  public resourceType: string;
  public id: string;
  public url: string;
  public status: string;
  public sujectType: string[];
  public date: string;
  public items: Item[];
}