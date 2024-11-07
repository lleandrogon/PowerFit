import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PlanosComponent } from './components/planos/planos.component';
import { ExperienciaComponent } from './components/experiencia/treinos.component';
import { OpinioesComponent } from './components/opinioes/opinioes.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatriculaComponent } from './components/matricula/matricula.component';
import { LayoutComponent } from './components/layout/layout.component';
import { EquipeComponent } from './components/equipe/equipe.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'header', component: HeaderComponent },
            { path: 'home', component: HomeComponent },
            { path: 'planos', component: PlanosComponent },
            { path: 'experiencia', component: ExperienciaComponent },
            { path: 'equipe', component: EquipeComponent },
            { path: 'opinioes', component: OpinioesComponent },
            { path: 'footer', component: FooterComponent}
        ]
    },
    {
        path: 'matricula',
        component: MatriculaComponent
    }
];
