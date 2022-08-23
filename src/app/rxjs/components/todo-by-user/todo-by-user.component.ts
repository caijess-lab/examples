import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RxjsBaseComponent } from 'src/app/classes/rxjs-base-component';
import { RxjsBaseService } from '../../services/rxjs.service';

@Component({
  selector: 'app-todo-by-user',
  templateUrl: './todo-by-user.component.html',
  styleUrls: ['./todo-by-user.component.css'],
})
export class TodoByUserComponent extends RxjsBaseComponent {
  todosWithUsers$ = this.rxjsBaseService.todosWithUsers$;
  constructor(public rxjsBaseService: RxjsBaseService, router: Router) {
    super(router, rxjsBaseService);
  }
}
