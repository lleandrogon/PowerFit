import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-curriculo',
  standalone: true,
  imports: [RouterModule, FooterComponent],
  templateUrl: './curriculo.component.html',
  styleUrl: './curriculo.component.css'
})
export class CurriculoComponent {
  constructor(public globalService: GlobalService) {}
}
