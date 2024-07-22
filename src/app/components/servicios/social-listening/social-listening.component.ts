import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-social-listening',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  template: `
  <header>
    <main>
    <h1>SOCIAL LISTENING</h1>
    <p>Descubre nuestras herramientas capaces de transformar conversaciones online en información estratégica para tu negocio. Identificamos las necesidades y deseos de tus clientes en tiempo real para potenciar tu marca, mejorando su posicionamiento e incrementando su comercialización.</p>
    <a href="#servicios">Regresar</a>
    <a href="#contactanos">Contáctanos</a></main>
   <iframe src="https://player.vimeo.com/video/946396742?h=cd6c28192b" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> <img src="/servicios/social-listening-informacion.jpg" alt="">

  </header>
    
  `,
  styleUrl: './social-listening.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialListeningComponent { }
