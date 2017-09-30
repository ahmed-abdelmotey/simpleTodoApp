import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgDatepickerModule } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { AppRouterModule} from './router/app-router.module';

import { SortByPipe } from './pipes/sortBy'

import { TodosListsService } from "./services/todos-lists/todos-lists.service";


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    WelcomeComponent,
    SortByPipe,
    DialogueComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    NgDatepickerModule
  ],
  providers: [TodosListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
