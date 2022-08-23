import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RxjsBaseComponent } from 'src/app/classes/rxjs-base-component';
import { RxjsBaseService } from '../../services/rxjs.service';

@Component({
  selector: 'app-user-by-todo',
  templateUrl: './user-by-todo.component.html',
  styleUrls: ['./user-by-todo.component.css'],
})
export class UserByTodoComponent extends RxjsBaseComponent {
  usersWithTodos$ = this.rxjsBaseService.usersWithTodos$;
  constructor(public rxjsBaseService: RxjsBaseService, router: Router) {
    super(router, rxjsBaseService);
  }
}
