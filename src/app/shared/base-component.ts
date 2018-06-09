
import { Router } from '@angular/router';

export abstract class BaseComponent {

  protected constructor(private baseRouter: Router) {

  }
  public goToHome() {
    this.baseRouter.navigateByUrl('/practice');
  }
}
