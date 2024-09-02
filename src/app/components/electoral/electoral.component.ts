import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-electoral',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div [innerHTML]="htmlContent">
</div>
  `,
  styleUrl: './electoral.component.css',
})
export class ElectoralComponent { 

  htmlContent: SafeHtml = '';

  private username = 'admin';
  private password = 'password';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getHtmlContent().subscribe((content: string) => {
      this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(content);
    });
  }

  private getHtmlContent(): Observable<string> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(`${this.username}:${this.password}`)
    });

    return this.http.get('https://chooseagencia.com/api/electoral.php', { headers, responseType: 'text' }).pipe(
      catchError(error => {
        console.error('Error fetching HTML content', error);
        return of('Error loading content');
      })
    );
  }

}

