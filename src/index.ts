import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NGFilterBarComponent } from './filter-bar.component';
import { NGFilterBarDirective } from './filter-bar.directive';
import { NGFilterBarPipe } from './filter-bar.pipe';
import { NGFilterBarService } from './filter-bar.service';
import { FilterConfig } from './models/filterConfig.model';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


export * from './filter-bar.component';
export * from './filter-bar.directive';
export * from './filter-bar.pipe';
export * from './filter-bar.service';
export * from './models/filterConfig.model';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot() 

  ],
  declarations: [
    NGFilterBarComponent,
    NGFilterBarDirective,
    NGFilterBarPipe
  ],
  exports: [
    NGFilterBarComponent,
    NGFilterBarDirective,
    NGFilterBarPipe
  ]
})
export class NgFilterBarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgFilterBarModule,
      providers: [NGFilterBarService]
    };
  }
}
