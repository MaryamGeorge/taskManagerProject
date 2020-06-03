import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TaskComponent } from './components/task/task.component';
import{RouterModule} from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTaskComponent,
    NotFoundComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
