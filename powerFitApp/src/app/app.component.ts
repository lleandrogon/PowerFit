import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { PlanosComponent } from "./components/planos/planos.component";
import { ExperienciaComponent } from "./components/experiencia/treinos.component";
import { OpinioesComponent } from "./components/opinioes/opinioes.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MatriculaComponent } from "./components/matricula/matricula.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, PlanosComponent, ExperienciaComponent, OpinioesComponent, FooterComponent, MatriculaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'powerFitApp';
}
