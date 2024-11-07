import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})

export class ExperienciaComponent {
  imagens: string[] = [
    'https://w7academia.com.br/wp-content/uploads/2023/05/W7ACADEMIATIJUCAS_PorqueimportantetreinaremumaAcademiacomequipamentosdequalidade.png',
    'https://uploads-ssl.webflow.com/64dd05b33f019f79a7ec8f43/66bf7eca9c44f4d087db871d_aula-de-bike-indoor.webp',
    'https://autoridadecross.com.br/wp-content/uploads/2019/07/capa-montar-academia-crossfit.jpg',
    'https://s.zst.com.br/cms-assets/2021/02/esteiras-ergometricas-mais-vendidas-janeiro-2021-2-.png',
    'https://simplyy.com.hk/wp-content/uploads/2016/10/Kpop-Dance-Lessons-2.jpg'
  ];

  indiceAtual: number = 0;

  descricao: string[] = [
    'Equipamentos com materiais de alto padrão.',
    'Salas exclusivas para aulas coletivas.',
    'Área com vários equipamentos para a realização de Cross Training.',
    'Espaço para treinos aeróbicos com esteiras e bicicletas.',
    'Sala exclusiva para aulas de dança.'
  ]

  imagemAtual(): string {
    return this.imagens[this.indiceAtual];
  }

  imagemAnterior(): void {
    this.indiceAtual = (this.indiceAtual - 1 + this.imagens.length) % this.imagens.length;
  }

  proximaImagem(): void {
    this.indiceAtual = (this.indiceAtual + 1) % this.imagens.length;
  }

  descricaoAtual(): string {
    return this.descricao[this.indiceAtual];
  }
}
