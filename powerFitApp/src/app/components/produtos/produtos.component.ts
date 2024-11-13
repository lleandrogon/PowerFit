import { Component } from '@angular/core';
import { Produto } from '../../models/produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produto: Produto[] = [
    {
      nome: 'Camisa Esportiva',
      foto: 'https://i1.t4s.cz//products/fd7487-657/nike-m-nk-df-strk24-ss-top-k-717904-fd7487-657-960.webp',
      preco: 120.00
    },
    {
      nome: 'Short Esportivo',
      foto: 'https://imgcentauro-a.akamaihd.net/1366x1366/95789219.jpg',
      preco: 90.00
    },
    {
      nome: 'Tênis Esportivo',
      foto: 'https://www.ishoes.com.br/produtos/Y01-0671-043-1-tenis-nike-downshifter-11-masculino.png',
      preco: 220.00
    },
    {
      nome: 'Regata',
      foto: 'https://images.tcdn.com.br/img/img_prod/633191/regata_em_cotton_preta_10621_1_fba864213cf836879c90f7b1ff14fc3d_20220615204301.jpg',
      preco: 90.00
    },
    {
      nome: 'Top',
      foto: 'https://images.tcdn.com.br/img/img_prod/982237/180_top_feminino_power_fit_black_1705_1_72d512fad91371f709e003318e4a532b.png',
      preco: 100.00
    },
    {
      nome: 'Garrafa',
      foto: 'https://static.prospin.com.br/media/catalog/product/cache/6e59e4946046b080cb91aa3230980e44/a/c/ac3788-028-garrafa-nike-core-hydro-flow-futura-709ml-cinza-e-vermelho.jpg',
      preco: 170.00
    },
    {
      nome: 'Whey Protein',
      foto: 'https://http2.mlstatic.com/D_NQ_NP_669598-MLU75135398027_032024-O.webp',
      preco: 60.00
    },
    {
      nome: 'Creatina',
      foto: 'https://mundoverde.vtexassets.com/arquivos/ids/275120/Creatina-Integralmedica-300g_0.jpg?v=638582375274800000',
      preco: 50.00
    },
    {
      nome: 'Coqueteleira',
      foto: 'https://www.gsuplementos.com.br/upload/produto/imagem/coqueteleira-simples-vermelha-growth-supplements.png',
      preco: 20.00
    }
  ]
}
