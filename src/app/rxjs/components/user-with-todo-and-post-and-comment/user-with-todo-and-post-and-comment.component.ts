import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RxjsBaseComponent } from 'src/app/classes/rxjs-base-component';
import { RxjsBaseService } from '../../services/rxjs.service';

@Component({
  selector: 'app-user-with-todo-and-post-and-comment',
  templateUrl: './user-with-todo-and-post-and-comment.component.html',
  styleUrls: ['./user-with-todo-and-post-and-comment.component.css'],
})
export class UserWithTodoAndPostAndCommentComponent extends RxjsBaseComponent {
  usersWithTodosAndPostsAndComments$ =
    this.rxjsBaseService.usersWithTodosAndPostsAndComments$;
  constructor(public rxjsBaseService: RxjsBaseService, router: Router) {
    super(router, rxjsBaseService);
  }
}
