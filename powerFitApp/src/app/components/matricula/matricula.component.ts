import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matricula',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matricula.component.html',
  styleUrl: './matricula.component.css'
})
export class MatriculaComponent {
  constructor(public globalService: GlobalService) {}

  

  teste: string = 'https://image.tuasaude.com/media/article/zj/xc/treino-de-braco_63228_l.jpg';
  light: string = 'https://blog.nextfit.com.br/wp-content/uploads/2024/02/exercicios-musculacao.jpg';
  fit: string = 'https://midias.agazeta.com.br/2021/02/09/homem-treinando-416526-article.jpg';
  fitPlus: string = 'https://uploads-ssl.webflow.com/64dd05b33f019f79a7ec8f43/669980d40e951bf5366aa2ea_treino-de-hipertrofia.webp';

  vantagensTeste: string[] = ['Acesso ilimitado à academia por 1 mês.', 'Aulas de grupo gratuitas.','Avaliação física inicial inclusa.'];

  vantagensLight: string[] = ['Acesso à academia de segunda a sexta.', 'Aulas de grupo ilimitadas.', 'Consulta com personal uma vez por mês.'];

  vantagensFit: string[] = ['Acesso 24 horas.', 'Aulas de grupo ilimitadas.', '2 consultas mensais com personal.'];

  vantagensFitPlus: string[] = ['Acesso 24 horas à academia.', 'Aulas de grupo ilimitadas.', 'Consultas ilimitadas com personal trainer.'];
}
