import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormularioComponent } from "./formulario/formulario.component";

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    FormularioComponent
],
  template: `
  <header>
        <div class="container">
        <app-formulario></app-formulario>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6787.805150358578!2d-77.02290423078374!3d-12.131911952270382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa3849d5cd6513ba1%3A0x913005d2f5fa7087!2sCHOOSE%20AGENCIA%20CREATIVA!5e1!3m2!1ses-419!2spe!4v1721335994109!5m2!1ses-419!2spe" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>  </header>
  `,
  styleUrl: './contactanos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactanosComponent { 
  


}
