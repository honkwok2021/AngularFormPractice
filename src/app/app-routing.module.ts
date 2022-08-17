import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { ReactiveFormCreateComponent } from './components/reactive-form-create/reactive-form-create.component';
import { TestingComponent } from './components/testing/testing.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import { ViewListComponent } from './components/view-list/view-list.component';

const routes: Routes = [
  {path:'',redirectTo:'memberlist', pathMatch:'full'},
  {path: 'create', component: ReactiveFormCreateComponent},
  {path: 'memberlist', component: ViewListComponent},
  {path: 'memberlist/:id', component: ViewDetailComponent},
  {path: 'memberedit', component:EditComponent},
  {path: 'memberedit/:id', component:EditComponent},
  {path: 'testing', component:TestingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
