import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders, provideHttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
      ReactiveFormsModule,
      JsonPipe,
      HttpClientModule
    ],
  template: `
      <form [formGroup]="formContacto" (ngSubmit)="onSubmit()">

      @if(!formularioEnviado){

  
      <legend>Contáctanos</legend>
        <label for="name">
          Nombres
          <input type="text" formControlName="name" name="name">
          @if (formContacto.invalid && formContacto.touched) {
            <div class="validator">
            Todos los campos son requeridos
            </div>
          }
        </label>
        <label for="lastname">
          Apellidos
          <input type="text" formControlName="lastname" name="lastname">
        </label>
        <label for="email">
          Email
          <input type="email" formControlName="email" name="email" placeholder="email@email.com">
        </label>
        <label for="phone">
          Teléfono
          <input type="text" formControlName="phone" name="phone" placeholder="999888777">
        </label>
        <label for="contry">
          Dirección/País
          <input type="text" formControlName="country" name="country" placeholder="C. Enrique del Horme 226, Miraflores / Perú">
        </label>
        <label for="message">
          Consulta
          <input type="text" id="message" formControlName="message" name="message" placeholder="Desarrollo web">
                
        </label>
          <p>
          Dirección: C. Enrique del Horme 226, Miraflores <br>
          Email: marketing&#64;chooseagencia.com <br>
          Teléfono: +51 932 188 688 <br>  </p>
        <button type="submit"> Enviar </button> }
        @else {
          <h2 class="titulo-envio">Gracias por contactarnos, Choose Agencia validará su solicitud.</h2>
        }
      </form>   
  `,
  styleUrl: './formulario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioComponent {

  private apiUrl = 'https://formsubmit.co/knarf2003angelo@gmail.com';
  formularioEnviado = false;

  constructor(private http: HttpClient) {}

  formContacto = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  onSubmit() {
    if (this.formContacto.valid) {
      const formData = this.formContacto.value;
      console.log('Form Submitted:', formData);
      this.formularioEnviado=true;
    }
  }

 }
