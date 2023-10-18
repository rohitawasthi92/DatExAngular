import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuerybuilderComponent } from './querybuilder.component';

const routes: Routes = [{ path: '', component: QuerybuilderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuerybuilderRoutingModule { }
