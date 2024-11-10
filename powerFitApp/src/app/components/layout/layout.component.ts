import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PlanosComponent } from "../planos/planos.component";
import { ExperienciaComponent } from "../experiencia/treinos.component";
import { OpinioesComponent } from "../opinioes/opinioes.component";
import { FooterComponent } from "../footer/footer.component";
import { HomeComponent } from "../home/home.component";
import { EquipeComponent } from "../equipe/equipe.component";
import { ProdutosComponent } from "../produtos/produtos.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, PlanosComponent, ExperienciaComponent, OpinioesComponent, FooterComponent, HomeComponent, EquipeComponent, ProdutosComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
