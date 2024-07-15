import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { NavResponsiveComponent } from "./nav-responsive/nav-responsive.component";

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    NavResponsiveComponent
],
  template: `
    <app-nav></app-nav>
    <app-nav-responsive></app-nav-responsive>
  `,
  styleUrl: './navegacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavegacionComponent { }
