import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './services/app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  // liste des todos
  // todos$ = this.appService.todos$;

  // liste des users
  // users$ = this.appService.users$;

  // combinaison des users dans todos
  // todosWithUsers$ = this.appService.todosWithUsers$;

  // on veut ranger chaque todos par user
  // usersWithTodos$ = this.appService.usersWithTodos$;

  // on veut ranger chaque todos par user et ajouter leurs posts
  // usersWithTodosAndPosts$ = this.appService.usersWithTodosAndPosts$;

  // todos, posts et comments par user
  // usersWithTodosAndPostsAndComments$ =
    // this.appService.usersWithTodosAndPostsAndComments$;

  // menus
  menus = this.appService.menus;

  constructor(public appService: AppService, public router: Router) {
    console.log(router.url);
  }
}
