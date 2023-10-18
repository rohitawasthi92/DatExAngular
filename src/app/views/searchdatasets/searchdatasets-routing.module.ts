import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchdatasetsComponent } from './searchdatasets.component';


const routes: Routes = [
  { path: '', component: SearchdatasetsComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchdatasetsRoutingModule { }
