import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RxjsBaseComponent } from 'src/app/classes/rxjs-base-component';
import { RxjsBaseService } from '../../services/rxjs.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent extends RxjsBaseComponent {
  users$ = this.rxjsBaseService.users$;
  constructor(public rxjsBaseService: RxjsBaseService, router: Router) {
    super(router, rxjsBaseService);
  }
}
