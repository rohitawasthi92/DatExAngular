import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsubscriptionsRoutingModule } from './viewsubscriptions-routing.module';
import { ViewsubscriptionsComponent } from './viewsubscriptions.component';
import {SearchdatasetsModule} from '../searchdatasets/searchdatasets.module'

@NgModule({
  declarations: [
    ViewsubscriptionsComponent
  ],
  imports: [
    CommonModule,
    ViewsubscriptionsRoutingModule,
    SearchdatasetsModule
  ]
})
export class ViewsubscriptionsModule { }
