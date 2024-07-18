import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
      <form action="">
        <legend>Contáctanos</legend>
        <label for="">
          Nombres
          <input type="text">
        </label>
        <label for="">
          Apellidos
          <input type="text">
        </label>
        <label for="">
          Email
          <input type="text">
        </label>
        <label for="">
          Teléfono
          <input type="text">
        </label>
        <label for="">
          Dirección/País
          <input type="text">
        </label>
        <label for="">
          Consulta
          <Textarea>

          </Textarea>

                
        </label>
          <p>
          Dirección: C. Enrique del Horme 226, Miraflores 15047 <br>
          Email: marketing&#64;chooseagencia.com <br>
          Teléfono: +51 932 188 688 <br>  </p>
        <button type="submit">Enviar</button>
      </form>
  `,
  styleUrl: './formulario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioComponent { }
