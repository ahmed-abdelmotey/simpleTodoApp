import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../app.component";

import { WelcomeComponent } from "../components/welcome/welcome.component";
import { TodoListComponent } from "../components/todo-list/todo-list.component";
import { TodoListItemComponent } from "../components/todo-list-item/todo-list-item.component";
import { NotfoundComponent } from "../components/notfound/notfound.component";


const routs:Routes=[
    // {path: '',pathMatch:'full', redirectTo:'asd' },
    // {path: '',pathMatch: 'full', redirectTo:'product'},
    {path: 'welcome', component:WelcomeComponent},
    {path: 'todo/:id', component:TodoListItemComponent },
    {path: 'todo', component:TodoListComponent },
    {path: '',pathMatch: 'full', component:WelcomeComponent},
    {path: '**', component:NotfoundComponent }
]
@NgModule({
    imports: [ RouterModule.forRoot(routs) ],
    exports: [ RouterModule ],
})
export class AppRouterModule {
    
}