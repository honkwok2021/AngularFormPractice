import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider'
import {MatListModule} from '@angular/material/list'
import {MatExpansionModule} from '@angular/material/expansion'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormCreateComponent } from './components/reactive-form-create/reactive-form-create.component';
import { ViewListComponent } from './components/view-list/view-list.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule, MatFormFieldModule,MatInputModule,MatListModule,
    MatTableModule,MatButtonModule,MatToolbarModule,MatPaginatorModule,
    MatIconModule,MatSidenavModule,MatMenuModule,MatDividerModule,MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
