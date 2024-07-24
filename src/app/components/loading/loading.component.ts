import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="text-center">
    <h1>CHOOSE AGENCIA</h1>
    <div class="loading-dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
  `,
  styleUrl: './loading.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent { }
