import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, Inject, PLATFORM_ID, ChangeDetectorRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-maquina-escribir',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
  <div class="container">
    <p> > {{ tituloActual }} </p></div>
  `,
  styleUrls: ['./maquina-escribir.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaquinaEscribirComponent implements OnInit, OnDestroy {
  titulos: string[] = ["Web y Programacion", "Inteligencia y Social", "Branding y contenido digital", "Produccion Audiovisual", "Manejo de crisis"];
  tituloActual: string = '';
  indiceTituloActual: number = 0;
  indexCaracter: number = 0;
  intervaloEscribir: any;
  intervaloBorrar: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('Este mensaje solo se verá en el navegador');
      this.ngZone.runOutsideAngular(() => {
        this.iniciarMaquinaDeEscribir();
      });
    }
  }

  ngOnDestroy(): void {
    if (this.intervaloEscribir) {
      clearInterval(this.intervaloEscribir);
    }
    if (this.intervaloBorrar) {
      clearInterval(this.intervaloBorrar);
    }
  }

  iniciarMaquinaDeEscribir() {
    this.tituloActual = '';
    this.indexCaracter = 0;

    const titulo = this.titulos[this.indiceTituloActual];
    this.intervaloEscribir = setInterval(() => {
      if (this.indexCaracter < titulo.length) {
        this.ngZone.run(() => {
          this.tituloActual += titulo[this.indexCaracter];
          this.indexCaracter++;
          this.cdr.markForCheck();
        });
      } else {
        clearInterval(this.intervaloEscribir);
        setTimeout(() => {
          this.ngZone.run(() => {
            this.borrarTitulo();
          });
        }, 1500);
      }
    }, 50);
  }

  borrarTitulo() {
    this.intervaloBorrar = setInterval(() => {
      if (this.tituloActual.length > 0) {
        this.ngZone.run(() => {
          this.tituloActual = this.tituloActual.slice(0, -1);
          this.cdr.markForCheck();
        });
      } else {
        clearInterval(this.intervaloBorrar);
        this.indiceTituloActual++;
        if (this.indiceTituloActual === this.titulos.length) {
          this.indiceTituloActual = 0;
        }
        setTimeout(() => {
          this.ngZone.run(() => {
            this.iniciarMaquinaDeEscribir();
          });
        }, 500);
      }
    }, 40);
  }
}
