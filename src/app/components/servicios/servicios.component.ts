import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { serviciosJSON } from './serviciosDB/serviciosJSON';
import { IServicios } from './serviciosDB/IServicios';
register();
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    CommonModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <header>
        <swiper-container>
          @for (item of swiperObjects; track $index) {
            <swiper-slide>
              <div class="style-slide">
                <h2>{{item.title}}</h2>
                <h4>{{item.subtitle}}</h4>
                <button>Más info</button>
                <img [src]="item.img" alt="">
              </div>
             
            </swiper-slide>

          }
        </swiper-container>
    </header>
  `,
  styleUrl: './servicios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiciosComponent implements OnInit {


  swiperElements = signal<SwiperContainer | null>(null);
  swiperObjects: IServicios[] = serviciosJSON;

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      navigation:{
        enabled:true,
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      slidesPerView: 'auto',
      speed: 3000,
      loop:true,
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
