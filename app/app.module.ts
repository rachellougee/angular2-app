import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app.routing.module';


import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent }     from './users.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule, AppRoutingModule],
  declarations: [ AppComponent, DashboardComponent, UsersComponent ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
