import { Component } from '@angular/core';
import { RedeSocial } from '../../models/redeSocial';
import { Contato } from '../../models/contato';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  currentYear: number = new Date().getFullYear();
  githubLeandro: string = 'https://br.linkedin.com/in/leandro-gon%C3%A7alves-cris%C3%B3stomo-9936422b0?original_referer=https%3A%2F%2Fwww.linkedin.com%2F';

  redesSociais: RedeSocial[] = [
    {
      nome: 'Instagram',
      foto: 'https://img.icons8.com/win10/512/FFFFFF/instagram-new.png',
      link: 'https://www.instagram.com/'
    },
    {
      nome: 'Facebook',
      foto: 'https://img.icons8.com/ios7/600/FFFFFF/facebook-new.png',
      link: 'https://www.facebook.com/'
    },
    {
      nome: 'Tiktok',
      foto: 'https://img.icons8.com/win10/512/FFFFFF/tiktok.png',
      link: 'https://www.tiktok.com/login?lang=pt-BR&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Dpt-BR'
    },
    {
      nome: 'X',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png',
      link: 'https://x.com/?lang=pt-br'
    },
    {
      nome: 'LinkedIn',
      foto: 'https://img.icons8.com/ios11/200/FFFFFF/linkedin.png',
      link: 'https://br.linkedin.com/'
    },
  ]

  contatos: Contato[] = [
    {
      tipo: 'celular',
      foto: 'https://img.icons8.com/ios_filled/512/FFFFFF/apple-phone.png',
      contato: '+55 99 99999-9999'
    },
    {
      tipo: 'endereço',
      foto: 'https://img.icons8.com/m_rounded/200/FFFFFF/home.png',
      contato: 'Rua Angular da Silva, 689, JSlândia'
    },
    {
      tipo: 'email',
      foto: 'https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_White_512px.png',
      contato: 'powerfit@gmail.com'
    },
    {
      tipo: 'funcionamento',
      foto: 'https://www.seekpng.com/png/full/231-2314361_customized-monthly-training-plan-workout-icon-white-png.png',
      contato: 'Funcionamento 24 horas'
    }
  ]

}
