import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { isPlatformBrowser } from '@angular/common';
import { SwiperOptions } from 'swiper/types';
import { serviciosJSON } from './serviciosDB/serviciosJSON';
import { IServicios } from './serviciosDB/IServicios';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <header>
    <video autoplay muted loop src="fondo-movimiento.mp4"></video>
        <swiper-container init=false class="swiper-servicios">
          @for (item of swiperObjects; track $index) {
            <swiper-slide class="swiper-lazy-preloader">
              <div class="slide-custom">
                <h2>{{item.title}}</h2>
                <p>{{item.subtitle}}</p>
                <button class="button-slide" [routerLink]="item.pagina">Más info</button>
                <img [src]="item.img" alt="" loading="lazy">
              </div>
            </swiper-slide>
          }

        </swiper-container>
        <button class="swiper-button-next"> > </button>
        <button class="swiper-button-prev"> < </button>
    </header>
  `,
  styleUrl: './servicios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiciosComponent implements OnInit {


  swiperElements = signal<SwiperContainer | null>(null);
  swiperObjects: IServicios[] = serviciosJSON;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
    register();
    const swiperElemConstructor = document.querySelector('.swiper-servicios');
    const swiperOptions: SwiperOptions = {
      pagination:true,
      navigation:{
        enabled:true,
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      loop:true,
      lazyPreloaderClass: 'swiper-lazy-preloader',
      speed: 1000,
      spaceBetween:50,
      breakpoints: {
        0:{
          slidesPerView:1,
        },
        640: {
          slidesPerView:2,
        },
        1024: {
          slidesPerView:3,
        },
      },
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();
    }
  }
}
