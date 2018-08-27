import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,
  MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule,
  MatBottomSheetModule, MatDialogModule, MatInputModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { MyBottomSheetComponent, MatComponentsComponent, MyDialogComponent } from './mat-components/mat-components.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { AuthService } from './services/auth.service';
import { routing } from './app.routing';
import { LoginRequiredComponent } from './login-required/login-required.component';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MatComponentsComponent,
    HomeComponent,
    LoginComponent,
    FlexLayoutComponent,
    MyBottomSheetComponent,
    MyDialogComponent,
    LoginRequiredComponent
  ],
  imports: [
    routing,
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatInputModule
  ],
  entryComponents: [MyBottomSheetComponent, MyDialogComponent],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
