import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-planos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planos.component.html',
  styleUrl: './planos.component.css'
})
export class PlanosComponent {
  teste: string = 'https://image.tuasaude.com/media/article/zj/xc/treino-de-braco_63228_l.jpg';
  light: string = 'https://blog.nextfit.com.br/wp-content/uploads/2024/02/exercicios-musculacao.jpg';
  fit: string = 'https://midias.agazeta.com.br/2021/02/09/homem-treinando-416526-article.jpg';
  fitPlus: string = 'https://blog.gsuplementos.com.br/wp-content/uploads/2019/05/289511-5-dicas-para-ter-mais-foco-no-treino-e-ampliar-seus-resultados-scaled.jpg';

  vantagensTeste: string[] = ['Acesso ilimitado à academia por 1 mês.', 'Aulas de grupo gratuitas.','Avaliação física inicial inclusa.'];

  vantagensLight: string[] = ['Acesso à academia de segunda a sexta.', 'Aulas de grupo ilimitadas.', 'Consulta com personal uma vez por mês.'];

  vantagensFit: string[] = ['Acesso 24 horas.', 'Aulas de grupo ilimitadas.', '2 consultas mensais com personal.'];

  vantagensFitPlus: string[] = ['Acesso 24 horas à academia.', 'Aulas de grupo ilimitadas.', 'Consultas ilimitadas com personal trainer.'];
}
