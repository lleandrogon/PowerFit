import { Component } from '@angular/core';
import { Personal } from '../../models/personal';

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.css'
})
export class EquipeComponent {
  equipe: Personal[] = [
    {
      foto: 'https://img.freepik.com/fotos-premium/retrato-de-personal-trainer-com-ia-generativa-de-clientes-de-academia-de-ginastica_896194-2788.jpg',
      nome: 'Isack Neilton',
      area: 'Personal Trainer Geral',
      resumo: 'Isack Neilton, personal trainer com mais de 5 anos de experiência, cria treinos personalizados para diversos objetivos, como saúde, força e perda de peso. Seu trabalho foca em resultados sustentáveis, com planejamento estruturado e acompanhamento contínuo.'
    },
    {
      foto: 'https://vejasp.abril.com.br/wp-content/uploads/2016/11/4965_alyne-soares.jpeg?quality=70&strip=info&w=920&w=636',
      nome: 'Lara Cristina',
      area: 'Personal de Aulas Coletivas',
      resumo: 'Lara Cristina é uma professora de aulas coletivas com 7 anos de experiência, especializada em atividades como zumba, spinning e aeróbica. Seu foco é promover a motivação dos alunos, criando ambientes dinâmicos para um treino em grupo eficaz.'
    },
    {
      foto: 'https://img.freepik.com/fotos-gratis/pessoa-fazendo-ioga-acompanhada-pelo-seu-animal-de-estimacao_23-2150062355.jpg',
      nome: 'Juliana Santos',
      area: 'Personal de Yoga/Pilates',
      resumo: 'Juliana Santos é especialista em Yoga e Pilates com 6 anos de experiência, oferecendo treinos personalizados para melhorar a flexibilidade, força e equilíbrio dos alunos. Seu enfoque é no bem-estar integral, conectando corpo e mente para uma prática relaxante.'
    },
    {
      foto: 'https://media.istockphoto.com/id/1361355221/photo/happy-asian-athletic-woman-exercising-with-hand-weights-in-a-gym-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=bDUvRf25Ua6iEIbdbWDjRxSEG63Mpz2QkwhZjMuvE3c=',
      nome: 'Camila Oliveira',
      area: 'Personal para Gestantes',
      resumo: 'Camila Oliveira é personal trainer especializada em gestantes, com 7 anos de experiência ajudando futuras mamães a manterem a saúde física e emocional. Ela desenvolve treinos focando na preparação do corpo para o parto, alívio de dores e melhora da disposição.'
    },
    {
      foto: 'https://mlbtbcqppupm.i.optimole.com/cb:II15~5a0ea/w:724/h:483/q:90/f:best/ig:avif/https://blog.newtonpaiva.br/wp-content/uploads/2020/09/iStock-692173084.jpg',
      nome: 'João Silva',
      area: 'Professor de Dança',
      resumo: 'João Silva é um professor de dança com mais de 6 anos de experiência, especializado em estilos como ballet, jazz e hip-hop. Ele oferece aulas para diferentes idades. Seu objetivo é promover a expressão corporal e ajudar os alunos a se conectarem com a dança.'
    },
    {
      foto: 'https://t4.ftcdn.net/jpg/10/29/28/63/360_F_1029286381_h2SfWR9dWJ7Niht7yUdl6tPGEzHanTHl.jpg',
      nome: 'Carla Mendes',
      area: 'Personal Nutricional',
      resumo: 'Carla Mendes é personal trainer especializada em acompanhamento nutricional, ajudando seus clientes a alcançar seus objetivos com uma alimentação equilibrada. Com mais de 3 anos de experiência, ela faz planos alimentares para diferentes necessidades.'
    }
  ]
}
