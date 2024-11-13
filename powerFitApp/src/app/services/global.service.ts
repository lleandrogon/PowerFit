import { Injectable } from '@angular/core';
import { Plano } from '../models/plano';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public logoUrl: string = 'https://static.vecteezy.com/system/resources/thumbnails/013/146/831/small_2x/body-builder-lifting-a-dumbbell-png.png';

  public planos: Plano[] = [
    {
      tipo: 'Plano Teste',
      imagem: 'https://image.tuasaude.com/media/article/zj/xc/treino-de-braco_63228_l.jpg',
      vantagens: [
        '1 mês de acesso ilimitado.',
        'Aulas de grupo gratuitas.',
        'Avaliação física inicial inclusa.'
      ],
      preco: 0.00
    },
    {
      tipo: 'Plano Light',
      imagem: 'https://blog.nextfit.com.br/wp-content/uploads/2024/02/exercicios-musculacao.jpg',
      vantagens: [
        'Acesso de segunda a sexta.',
        'Aulas de grupo ilimitadas.',
        '1 consulta mensal com personal.'
      ],
      preco: 60.00
    },
    {
      tipo: 'Plano Fit',
      imagem: 'https://midias.agazeta.com.br/2021/02/09/homem-treinando-416526-article.jpg',
      vantagens: [
        'Acesso 24 horas.',
        'Aulas de grupo ilimitadas.',
        '2 consultas mensais com personal.'
      ],
      preco: 100.00
    },
    {
      tipo: 'Plano FitPlus',
      imagem: 'https://uploads-ssl.webflow.com/64dd05b33f019f79a7ec8f43/669980d40e951bf5366aa2ea_treino-de-hipertrofia.webp',
      vantagens: [
        'Acesso 24 horas.',
        'Aulas de grupo ilimitadas.',
        'Consultas ilimitadas com personal.'
      ],
      preco: 120.00
    }
  ];
}
