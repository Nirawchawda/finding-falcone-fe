import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindFalconeComponent } from './find-falcone.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';

const routes: Routes = [
  { path: '', component: FindFalconeComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'failure', component: FailureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindFalconeRoutingModule { }
