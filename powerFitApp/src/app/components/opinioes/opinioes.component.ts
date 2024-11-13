import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Opiniao } from '../../models/opiniao';

@Component({
  selector: 'app-opinioes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './opinioes.component.html',
  styleUrl: './opinioes.component.css'
})
export class OpinioesComponent {
  imagemTitulo: string = 'https://i.pinimg.com/originals/0e/1c/44/0e1c4487030a88bb06be433d78cfca67.png';

  opinioes: Opiniao[] = [
    {
      nome: 'Miguel Gonçalves',
      foto: 'https://cdn-icons-png.flaticon.com/512/4323/4323015.png',
      opiniao: 'Academia muito boa e completa, as aulas são muito boas como prometido e as atividades em grupo são muito dinâmicas, vale a pena o investimento.'
    },
    {
      nome: 'Luna dos Santos',
      foto: 'https://cdn-icons-png.flaticon.com/512/4128/4128314.png',
      opiniao: 'A estrutura é incrível, o ambiente é sempre motivador. Os instrutores ajudam em cada etapa do treino. Estou muito feliz com os resultados!'
    },
    {
      nome: 'Ezequiel Moreira',
      foto: 'https://cdn-icons-png.flaticon.com/512/2716/2716238.png',
      opiniao: 'Já passei por várias academias, mas a PowerFit é a única que  me fez sentir motivado. O espaço é excelente. Gosto muito da variedade de equipamentos.'
    },
    {
      nome: 'Mariana Silva',
      foto: 'https://cdn-icons-png.flaticon.com/512/4128/4128359.png',
      opiniao: 'A PowerFit é o lugar perfeito para quem quer treinar com qualidade e ser bem recebido. Os professores são muito competentes. Isso sem falar dos equipamentos.'
    }
  ];
}