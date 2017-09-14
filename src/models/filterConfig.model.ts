import { FilterConfigInterFace } from '../interfaces/filterConfig.interfaces';

export class FilterConfig implements FilterConfigInterFace {
	key:string;
	name:string;
	placeholder?:string;
	restrictToSuggestedValues?:boolean;
	value?:string;
	allowMultiple?:boolean;
  hidden?:boolean;



	constructor() {
    this.key = 'unknown';
    this.name = 'unknown';
    this.placeholder = 'Enter Value';
    this.restrictToSuggestedValues = true;
    this.value = "";
    this.allowMultiple =false;
    this.hidden=false;
  }

}