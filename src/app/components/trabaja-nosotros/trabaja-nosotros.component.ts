import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrabajaNosotrosService } from '../../trabajaNosotros.service';
import { response } from 'express';
import { error } from 'console';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-trabaja-nosotros',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavegacionComponent,
    FooterComponent
],
  template: `

  <header>
  <app-navegacion></app-navegacion>
  <div class="relleno"></div>
  <h1>Trabaja con nosotros</h1>
  <main>
  
    <form [formGroup]="formContacto" (ngSubmit)="registrar()">
      @if (enviarSolicitud) {
      <label for="nombres">
        <p>Nombres<span>*</span></p>
        <input
          type="text"
          id="nombres"
          placeholder="Tus nombres"
          formControlName="nombres"
        />
        <div *ngIf="formContacto.get('nombres')?.invalid && (formContacto.get('nombres')?.touched || formContacto.get('nombres')?.dirty)">
          <p class="error">Este campo es obligatorio.</p>
        </div>
      </label>
      
      <label for="apellidos">
        <p>Apellidos<span>*</span></p>
        <input
          type="text"
          id="apellidos"
          placeholder="Tus apellidos"
          formControlName="apellidos"
        />
        <div *ngIf="formContacto.get('apellidos')?.invalid && (formContacto.get('apellidos')?.touched || formContacto.get('apellidos')?.dirty)">
          <p class="error">Este campo es obligatorio.</p>
        </div>
      </label>
      
      <label for="email">
        <p>Correo electrónico<span>*</span></p>
        <input
          type="text"
          id="email"
          placeholder="ejemplo@gmail.com"
          formControlName="email"
        />
        <div *ngIf="formContacto.get('email')?.invalid && (formContacto.get('email')?.touched || formContacto.get('email')?.dirty)">
          <p class="error" *ngIf="formContacto.get('email')?.errors?.['required']">Este campo es obligatorio.</p>
          <p class="error" *ngIf="formContacto.get('email')?.errors?.['email']">Correo electrónico no válido.</p>
        </div>
      </label>
      
      <label for="celular">
        <p>Celular</p>
        <input
          type="text"
          id="celular"
          placeholder="952599717"
          formControlName="celular"
        />
        <div *ngIf="formContacto.get('celular')?.invalid && (formContacto.get('celular')?.touched || formContacto.get('celular')?.dirty)">
          <p class="error">Este campo es obligatorio.</p>
        </div>
      </label>
      
      <label for="linkedin">
        <p>Linkedin</p>
        <input
          type="text"
          id="linkedin"
          placeholder="Tu linkedin"
          formControlName="linkedin"
        />
        <div *ngIf="formContacto.get('linkedin')?.invalid && (formContacto.get('linkedin')?.touched || formContacto.get('linkedin')?.dirty)">
          <p class="error">Este campo es obligatorio.</p>
        </div>
      </label>
      
      <label class="curriculum" for="image_uploads">
        <p>CV</p>
        <p class="place" #fileLabel>Sube tu CV</p>
        <input
          class="archivo"
          type="file"
          (change)="onFileChange($event)"
          accept=".pdf"
          placeholder="Adjunta tu cv"
          formControlName="cv"
          id="image_uploads"
          name="image_uploads"
        />
        <div *ngIf="formContacto.get('cv')?.invalid && (formContacto.get('cv')?.touched || formContacto.get('cv')?.dirty)">
          <p class="error">Debes adjuntar un archivo PDF.</p>
        </div>
      </label>
      
      <label for="portafolio">
        <p>Portafolio</p>
        <input
          type="text"
          id="portafolio"
          placeholder="Adjunta tu portafolio"
          formControlName="portafolio"
        />
        <div *ngIf="formContacto.get('portafolio')?.invalid && (formContacto.get('portafolio')?.touched || formContacto.get('portafolio')?.dirty)">
          <p class="error">Este campo es obligatorio.</p>
        </div>
      </label>
      
      <button type="submit" [disabled]="formContacto.invalid">Enviar</button>}
      @else {
        <h2 class="titulo-envio">Gracias por contactarno, Choose Agencia validará su solicitud.</h2>
        <img class="img-envio" src="logo-responsive.png" alt="">
      }
    </form>
    <img class="charles" src="trabaja-nosotros/charles.png" alt="">
  </main>
</header>
  <app-footer></app-footer>

  `,
  styleUrl: './trabaja-nosotros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrabajaNosotrosComponent {
  @ViewChild('fileLabel', { static: false }) fileLabel!: ElementRef;

  formContacto: FormGroup = new FormGroup({
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    celular: new FormControl('', Validators.required),
    linkedin: new FormControl('', Validators.required),
    cv: new FormControl('', Validators.required),
    portafolio: new FormControl('', Validators.required),
  });

  selectedFile: string | null = null;
  enviarSolicitud:Boolean = true;
  constructor(private curriculumsService: TrabajaNosotrosService) {}

  // Maneja el cambio de archivo y lo convierte a Blob
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.convertToBase64(file); // Llamada a la función para convertir a Base64
      if (file.type !== 'application/pdf') {
        alert('Por favor, selecciona un archivo PDF.');
        input.value = ''; // Limpia la selección de archivos
        this.fileLabel.nativeElement.textContent = 'Sube tu CV'; // Restablece el texto
      } else {
        this.fileLabel.nativeElement.textContent = file.name; // Muestra el nombre del archivo
      }
    } else {
      this.fileLabel.nativeElement.textContent = 'Sube tu CV'; // Restablece el texto si no hay archivo
    }
  }

  convertToBase64(file: File) {
    const reader = new FileReader(); // Usar FileReader para leer el archivo

    reader.readAsDataURL(file); // Leer el archivo como DataURL (Base64)

    reader.onload = () => {
      const base64String = reader.result as string; // El archivo en Base64
      this.selectedFile = base64String;
    };

    reader.onerror = (error) => {
      console.error('Error al convertir el archivo a Base64:', error);
    };
  }

  // Envía el archivo como Blob al servidor
  registrar(): void {
    if (this.formContacto.invalid) {
      // Marcar todos los campos como tocados para mostrar los mensajes de error
      Object.keys(this.formContacto.controls).forEach(field => {
        const control = this.formContacto.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
      return;
    }
    this.enviarSolicitud = false;
    this.formContacto.value.cv = this.selectedFile;
    console.log(this.formContacto.value); // Muestra el FormData en la consola
    this.curriculumsService.addCurriculum(this.formContacto.value).subscribe(
      response => {
        console.log('Formulario enviado:', response);
        this.enviarSolicitud = false;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
