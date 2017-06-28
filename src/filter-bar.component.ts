import { Component,Input,Output,EventEmitter } from '@angular/core';
import {FilterConfig} from './models/filterConfig.model';

@Component({
  selector: 'ng-filter-bar',
  template: `<div class="row">
  <div class="dropDownContainer">
    <div ngbDropdown class="d-inline-block">
      <button class="btn btn-outline-primary glyphicon glyphicon-filter" id="dropdownBasic1" ngbDropdownToggle></button>
      <div class="dropdown-menu" aria-labelledby="dropdownBasic1">
        <div  *ngFor="let filterItem of filtersConfig" > 
            <button  class="dropdown-item" (click)=filterItemClicked(filterItem) *ngIf="!filterItem.hidden">{{filterItem.name}}</button>
        </div>
      </div>
    </div>
  </div>
  <div class="filterDiv">
  <div class="chip" *ngFor="let item of selectedFilters">{{item.name}} <input type="text" (focusout)="emitNewData()" [(ngModel)]="item.value"><span class="glyphicon glyphicon-remove" (click)="removeFilter(item)"></span></div>
  </div><div class="clearAll"><span class="glyphicon glyphicon-remove" (click)="clearFilterBar()"></span></div>
</div>`,
  styles:[`
  .row{
    border:1px solid black;
    width:100%;
  }  
  .dropDownContainer{
    width:5%;
  }
  .clearAll{
        font-size: x-large;
        text-align:right;

  }
  .chip {
    display: inline;
    float:left;
    padding: 0 10px;
    height: 30px;
    font-size: 16px;
    line-height: 30px;
    border-radius: 25px;
    background-color: #f1f1f1;
}
.chip input{
  height:25px;
  border:none;
}
.filterDiv{
   position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
   width:90%;
   height:30px;
   white-space:nowrap;
}
  
  
  `]
})
export class NGFilterBarComponent{

  constructor() {
  }

  
  @Input() filtersConfig:Array<FilterConfig> ;
  selectedFilters:Array<FilterConfig>=[];



  @Output() onChange=new EventEmitter();

  filterItemClicked(item:FilterConfig){
    item.hidden=true;
    this.selectedFilters.push(item);
  }

  removeFilter(item:FilterConfig){
   let index=this.selectedFilters.indexOf(item);
  item.hidden=false;
  item.value="";
    if(index>=0){
      this.selectedFilters.splice( index, 1 );
    }

    this.emitNewData();
  }

  clearFilterBar(){
    for(let filter of this.selectedFilters){
      filter.hidden=false;
      filter.value="";
    }
    this.selectedFilters=[];
    this.emitNewData();
  }

  emitNewData(){
    this.onChange.emit(this.selectedFilters);
    }




}
