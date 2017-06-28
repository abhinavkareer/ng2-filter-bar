import { Injectable,EventEmitter } from '@angular/core';
import { FilterConfig } from './models/filterConfig.model';

@Injectable()
export class NGFilterBarService {

  constructor() {

  }


  emitAddFilter = new EventEmitter<FilterConfig>();

	addFilter(item:FilterConfig){
		this.emitAddFilter.emit(item);
	}
}
