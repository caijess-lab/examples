import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RxjsBaseComponent } from 'src/app/classes/rxjs-base-component';
import { RxjsBaseService } from '../../services/rxjs.service';

@Component({
  selector: 'app-user-with-todo-and-post',
  templateUrl: './user-with-todo-and-post.component.html',
  styleUrls: ['./user-with-todo-and-post.component.css'],
})
export class UserWithTodoAndPostComponent extends RxjsBaseComponent {
  usersWithTodosAndPosts$ = this.rxjsBaseService.usersWithTodosAndPosts$;
  constructor(public rxjsBaseService: RxjsBaseService, router: Router) {
    super(router, rxjsBaseService);
  }
}
