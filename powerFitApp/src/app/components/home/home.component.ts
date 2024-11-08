import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor (public globalService: GlobalService) {}
}
