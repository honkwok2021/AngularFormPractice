import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormCreateComponent } from './components/reactive-form-create/reactive-form-create.component';
import { ViewListComponent } from './components/view-list/view-list.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormCreateComponent,
    ViewListComponent,
    ViewDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
