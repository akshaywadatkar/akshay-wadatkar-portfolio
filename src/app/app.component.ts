import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'akshay-wadatkar-portfolio';

  isOpen: boolean = false;

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
