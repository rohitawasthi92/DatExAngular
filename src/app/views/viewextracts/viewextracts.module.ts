import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewextractsRoutingModule } from './viewextracts-routing.module';
import { ViewextractsComponent } from './viewextracts.component';
import {SearchdatasetsModule} from '../searchdatasets/searchdatasets.module'


@NgModule({
  declarations: [
    ViewextractsComponent
  ],
  imports: [
    CommonModule,
    ViewextractsRoutingModule,
    SearchdatasetsModule
  ]
})
export class ViewextractsModule { }
