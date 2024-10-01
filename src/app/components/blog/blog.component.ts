import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { IServicios } from '../servicios/serviciosDB/IServicios';
import { SwiperOptions } from 'swiper/types';
import { IBlog } from './blogDB/IBlog';
import { blogJSON } from './blogDB/blogJSON';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    RouterLink
  ],
  template: `
    <header>
      <h1 class="titulo">Nuestro Blog</h1>
      <main>
      @for (item of items; track $index) {
        <div class="blog-card">
          <div class="container-img">
                      <img [src]="item.image" [alt]="item.title">
                      <ul>
                        @for (tag of item.etiquetas; track $index) {
                          <li>{{tag}}</li>
                        }
                      </ul>
          </div>
          <h3>{{item.title}}</h3>
          <p>{{item.date}}</p>
          <a href="https://blog.chooseagencia.com/">Leer más</a>
        </div>
      }</main>
    </header>
  `,
  styleUrl: './blog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent { 
  swiperElements = signal<SwiperContainer | null>(null);
  items: IBlog[] = blogJSON;
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
