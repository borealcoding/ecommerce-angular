import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopper-ecommerce';

  constructor(private router: Router) { }

  navigateToTienda() {
    this.router.navigate(['/']);
  }

  navigateToNosotros() {
    this.router.navigate(['/nosotros']);
  }
}
