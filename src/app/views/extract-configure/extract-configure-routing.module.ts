import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtractConfigureComponent } from './extract-configure.component';

const routes: Routes = [{ path: '', component: ExtractConfigureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtractConfigureRoutingModule { }
