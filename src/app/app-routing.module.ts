import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormCreateComponent } from './components/reactive-form-create/reactive-form-create.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import { ViewListComponent } from './components/view-list/view-list.component';

const routes: Routes = [
  {path:'',redirectTo:'memberlist', pathMatch:'full'},
  {path: 'create', component: ReactiveFormCreateComponent},
  {path: 'memberlist', component: ViewListComponent},
  {path: 'memberlist/:id', component: ViewDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
