import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <footer>
      <div class="conteiner-1">
        <h1>CHOOSE</h1>
        <p>
        C. Enrique del Horme 226, <br>
Miraflores <br>
Lima, Perú
<br><br>
Teléfono: +51 932 188 688 <br>
Email: marketing&#64;chooseagencia.com <br>
        </p>
      </div>
      <div class="conteiner-2">
        <ul>
          <li class="titulo-2">Enlaces</li>
          <li><a href="#inicio">Inicio</a></li>
      <li><a href="#nosotros">Nosotros</a></li>
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#contactanos">Contacto</a></li>
      <li><a href="trabaja-nosotros">Trabaja con nosotros</a></li>
        </ul>
      </div>
      <div class="conteiner-3"> 
        <p >Síguenos</p>
        <ul class="icons">
         
          <li><a href="https://www.instagram.com/chooseagencia/" target="_blank">
            <img src="/icons/footer-instagram.svg" alt="instagram de la agencia de marketing de choose">
          </a></li>
          <li><a href="https://www.facebook.com/ChooseAgenciaCreativa" target="_blank">
            <img src="/icons/footer-facebook.svg" alt="facebook de la agencia de marketing de choose">
          </a></li>
          <li><a href="https://www.youtube.com/@chooseagencia" target="_blank">
            <img src="/icons/footer-youtube.svg" alt="youtube de la agencia de marketing de choose">
          </a></li>
          <li><a href="https://www.tiktok.com/@chooseagencia" target="_blank">
            <img src="/icons/footer-tiktok.svg" alt="tiktok de la agencia">
          </a></li>
          <li><a href="https://www.linkedin.com/in/choose-agencia-creativa/" target="_blank">
            <img src="/icons/footer-linkedin.svg" alt="linkedin de la agencia de marketing de choose">
          </a></li>
          <li><a href="https://x.com/ChooseAgencia" target="_blank">
            <img src="/icons/footer-twitter.svg" alt="twitter de la agencia de marketing de choose">
          </a></li>
        </ul>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
