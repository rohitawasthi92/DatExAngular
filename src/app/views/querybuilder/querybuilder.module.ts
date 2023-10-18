import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuerybuilderRoutingModule } from './querybuilder-routing.module';
import { QuerybuilderComponent } from './querybuilder.component';
import { SearchdatasetsModule } from '../searchdatasets/searchdatasets.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [QuerybuilderComponent],
  imports: [
    CommonModule,
    QuerybuilderRoutingModule,
    SearchdatasetsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
})
export class QuerybuilderModule {}
