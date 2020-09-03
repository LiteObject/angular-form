import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MaterialModule} from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserCreateComponent,
    UserDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'user/:id', component: UserDetailsComponent },
      { path: 'create-user', component: UserCreateComponent },
      { path: 'user-create', component: UserCreateComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
