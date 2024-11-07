import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-matricula',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FooterComponent, HeaderComponent],
  templateUrl: './matricula.component.html',
  styleUrl: './matricula.component.css'
})
export class MatriculaComponent {
  constructor(public globalService: GlobalService) {}

  matriculaForm = new FormGroup({
    nome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    nascimento: new FormControl(null, [Validators.required]),
    genero: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefone: new FormControl(null, [Validators.required, Validators.pattern('^\\d{10,11}$')]),
    peso: new FormControl(null, [Validators.required, Validators.min(0)]),
    altura: new FormControl(null, [Validators.required, Validators.min(0)]),
    plano: new FormControl(null, [Validators.required])
  });

  limparFormulario() {
    this.matriculaForm.reset();
  }

  enviarFormulario() {
    const dadosFormulario = this.matriculaForm.value;
    console.log('Dados do formulário:', dadosFormulario);
    alert('Dados enviado com sucesso!')
  }
}