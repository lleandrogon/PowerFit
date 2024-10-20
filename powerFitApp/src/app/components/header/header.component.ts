import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  logoAcademia: string = 'https://static.vecteezy.com/system/resources/thumbnails/013/146/831/small_2x/body-builder-lifting-a-dumbbell-png.png';
  visivel: boolean = false;

  verMenu() {
    this.visivel = !this.visivel;
  }
}
