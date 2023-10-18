import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtractConfigureRoutingModule } from './extract-configure-routing.module';
import { ExtractConfigureComponent } from './extract-configure.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExtractConfigureComponent
  ],
  imports: [
    CommonModule,
    ExtractConfigureRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class ExtractConfigureModule { }
