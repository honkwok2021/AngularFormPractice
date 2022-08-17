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
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormCreateComponent } from './components/reactive-form-create/reactive-form-create.component';
import { ViewListComponent } from './components/view-list/view-list.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailDialogComponent } from './components/dialogs/detail-dialog/detail-dialog.component';
import { EditDialogComponent } from './components/dialogs/edit-dialog/edit-dialog.component';
import { EditComponent } from './components/edit/edit.component';
import { TestingComponent } from './components/testing/testing.component';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormCreateComponent,
    ViewListComponent,
    ViewDetailComponent,
    DetailDialogComponent,
    EditDialogComponent,
    EditComponent,
    TestingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule, MatFormFieldModule,MatInputModule,MatListModule,
    MatTableModule,MatButtonModule,MatToolbarModule,MatPaginatorModule,
    MatIconModule,MatSidenavModule,MatMenuModule,MatDividerModule,MatExpansionModule,
    MatSortModule,MatDialogModule,
    FormlyMaterialModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
