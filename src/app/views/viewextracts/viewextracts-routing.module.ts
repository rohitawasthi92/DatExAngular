import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewextractsComponent } from './viewextracts.component';

const routes: Routes = [{ path: '', component: ViewextractsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewextractsRoutingModule { }
