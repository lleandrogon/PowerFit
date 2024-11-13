import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { FooterComponent } from "../footer/footer.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-curriculo',
  standalone: true,
  imports: [RouterModule, FooterComponent, ReactiveFormsModule],
  templateUrl: './curriculo.component.html',
  styleUrl: './curriculo.component.css'
})
export class CurriculoComponent {
  constructor(public globalService: GlobalService) {}
  
  curriculoForm = new FormGroup({
    nome: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefone: new FormControl(null, [Validators.required, Validators.pattern('^\\d{10,11}$')]),
    nascimento: new FormControl(null, [Validators.required]),
    endereco: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    linkedin: new FormControl(null),
    escolaridade: new FormControl(null, [Validators.required]),
    instituicao: new FormControl(null, [Validators.required]),
    curso: new FormControl(null),
    conclusao: new FormControl(null, [Validators.required]),
    empresa: new FormControl(null),
    cargo: new FormControl(null),
    periodo: new FormControl(null),
    descricao: new FormControl(null),
    habilidades: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    idiomas: new FormControl(null),
    cpf: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    curriculo: new FormControl(null, [Validators.required])
  });

  limparFormulario() {
    this.curriculoForm.reset();
  }

  enviarFormulario() {
    const dadosFormulario = this.curriculoForm.value;
    console.log('Dados do Curriculo:', dadosFormulario);
    alert('Currículo enviado com sucesso!');
  }
}