import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsubscriptionsComponent } from './viewsubscriptions.component';

const routes: Routes = [{ path: '', component: ViewsubscriptionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsubscriptionsRoutingModule { }
