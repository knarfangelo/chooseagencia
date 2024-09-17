import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trabaja-nosotros',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
    <h1>Trabaja con nosotros</h1>
     <main>
      <form action="">
        <label for=""><p>Nombres<span>*</span></p>
          <input type="text" name="" id="">
        </label>
        <label for=""><p>Apellidos<span>*</span></p>
          <input type="text" name="" id="">
        </label>
        <label for=""><p>Correo electronico<span>*</span></p>
          <input type="text" name="" id="">
        </label>
        <label for=""><p>Celular</p>
          <input type="text" name="" id="">
        </label>
        <label for=""><p>Linkedin</p>
          <input type="text" name="" id="">
        </label>
        <label for=""><p>CV</p>
          <input type="text" name="" id="">
        </label>
        <label for=""><p>Portafolio</p>
          <input type="text" name="" id="">
        </label>
      </form>
      <img class="charles" src="trabaja-nosotros/charles.png" alt=""> </main>
    </header>
  `,
  styleUrl: './trabaja-nosotros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrabajaNosotrosComponent { }
