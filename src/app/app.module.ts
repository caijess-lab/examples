import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './standard/components/accueil/accueil.component';
import { TodoListComponent } from './rxjs/components/todo-list/todo-list.component';
import { UserListComponent } from './rxjs/components/user-list/user-list.component';
import { UserByTodoComponent } from './rxjs/components/user-by-todo/user-by-todo.component';
import { TodoByUserComponent } from './rxjs/components/todo-by-user/todo-by-user.component';
import { UserWithTodoAndPostComponent } from './rxjs/components/user-with-todo-and-post/user-with-todo-and-post.component';
import { UserWithTodoAndPostAndCommentComponent } from './rxjs/components/user-with-todo-and-post-and-comment/user-with-todo-and-post-and-comment.component';
import { TableauInsertComponent } from './rxjs/components/tableau-insert/tableau-insert.component';
import { BoiteDeDialogueComponent } from './standard/components/boite-de-dialogue/boite-de-dialogue.component';
import { RxjsBaseService } from './rxjs/services/rxjs.service';
import { AppService } from './services/app.service';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'todos', component: TodoListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'todosWithUsers', component: TodoByUserComponent },
  { path: 'usersWithTodos', component: UserByTodoComponent },
  { path: 'usersWithTodosAndPosts', component: UserWithTodoAndPostComponent },
  {
    path: 'usersWithTodosAndPostsAndComments',
    component: UserWithTodoAndPostAndCommentComponent,
  },
  {
    path: 'tableauinsert',
    component: TableauInsertComponent,
  },{
    path: 'boiteDeDialogue',
    component: BoiteDeDialogueComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TodoListComponent,
    UserListComponent,
    TodoByUserComponent,
    UserWithTodoAndPostComponent,
    UserWithTodoAndPostAndCommentComponent,
    AccueilComponent,
    TableauInsertComponent,
    UserByTodoComponent,
    BoiteDeDialogueComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AppService, RxjsBaseService],
  exports: [RouterModule],
})
export class AppModule {}
