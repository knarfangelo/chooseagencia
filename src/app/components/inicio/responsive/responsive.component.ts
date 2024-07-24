import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-responsive',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>responsive works!</p>`,
  styleUrl: './responsive.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResponsiveComponent { 
  
}
