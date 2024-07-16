import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';

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
  styleUrls: ['./maquina-escribir.component.css'],  // Asegúrate de usar 'styleUrls' en plural
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
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('Este mensaje solo se verá en el navegador');
      this.iniciarMaquinaDeEscribir();
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
    this.tituloActual = ''; // Reiniciar el título actual
    this.indexCaracter = 0; // Reiniciar el índice del caracter

    // Simular la escritura del título actual
    const titulo = this.titulos[this.indiceTituloActual];
    this.intervaloEscribir = setInterval(() => {
      if (this.indexCaracter < titulo.length) {
        this.tituloActual += titulo[this.indexCaracter];
        this.indexCaracter++;
        this.cdr.markForCheck();  // Marca el cambio para que la vista se actualice
      } else {
        clearInterval(this.intervaloEscribir);
        setTimeout(() => {
          this.borrarTitulo();
        }, 1500); // Tiempo de espera antes de borrar (en milisegundos)
      }
    }, 50); // Velocidad de escritura (en milisegundos por letra)
  }

  borrarTitulo() {
    this.intervaloBorrar = setInterval(() => {
      if (this.tituloActual.length > 0) {
        this.tituloActual = this.tituloActual.slice(0, -1); // Eliminar la última letra
        this.cdr.markForCheck();  // Marca el cambio para que la vista se actualice
      } else {
        clearInterval(this.intervaloBorrar);
        this.indiceTituloActual++;
        if (this.indiceTituloActual === this.titulos.length) {
          this.indiceTituloActual = 0; // Reiniciar el ciclo
        }
        setTimeout(() => {
          this.iniciarMaquinaDeEscribir();
        }, 500); // Tiempo de espera antes de iniciar el próximo título (en milisegundos)
      }
    }, 40); // Velocidad de borrado (en milisegundos por letra)
  }
}
