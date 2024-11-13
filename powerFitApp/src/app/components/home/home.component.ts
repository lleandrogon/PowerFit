import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('buttonAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('1000ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('logoAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('1300ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ]),
    trigger('textAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1500ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {
  constructor (public globalService: GlobalService) {}
}