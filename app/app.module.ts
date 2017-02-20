import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// route module
import { AppRoutingModule } from './app.routes';

//components
import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent }     from './users/users.component';
//services
import { UsersService }  from './users/users.service';


@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent
  ],
  providers: [ UsersService],
  bootstrap:  [ AppComponent ]
})


export class AppModule { }
