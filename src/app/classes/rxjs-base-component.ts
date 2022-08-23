import { Router } from '@angular/router';
import { RxjsBaseService } from '../rxjs/services/rxjs.service';
import { AppService } from '../services/app.service';

export abstract class RxjsBaseComponent {
  protected title: string;
  constructor(protected router: Router, rxjsBaseService: RxjsBaseService) {
    this.title = rxjsBaseService.menus.filter(
      (item) => item.url === router.url
    )[0].title;
  }
}
