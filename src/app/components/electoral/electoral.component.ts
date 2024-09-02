import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { catchError, Observable, of } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-electoral',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  template: `
 
  <div class="contenido" *ngIf="!isAuthenticated">
    <main>
    <div class="container">
        <img class="fondo" src="electoral/fondo.jpg" alt="">
        <img class="choose" src="electoral/choose.png" alt="">
    </div>
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <legend>Ingresa tus credenciales</legend>
      <div class="usuario">
        <label for="username">Usuario:</label>
        <input id="username" formControlName="username" type="text">
      </div>
      <div class="contraseña">
        <label for="password">Contraseña:</label>
        <input id="password" formControlName="password" type="password">
      </div>
      <div *ngIf="loginError" class="error">Usuario o Contraseña incorrecta</div>
      <button type="submit">INGRESA</button>
    </form></main>
    
  </div>
  <header class="informacion" *ngIf="isAuthenticated" [innerHTML]="htmlContent">
  </header>
  `,
  styleUrls: ['./electoral.component.css'],
})
export class ElectoralComponent { 

  htmlContent: SafeHtml = '';
  isAuthenticated = false;
  loginError = false;
  loginForm: FormGroup;

  constructor(
    private http: HttpClient, 
    private sanitizer: DomSanitizer,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;

    this.getHtmlContent(username, password).subscribe((content: string) => {
      if (content.startsWith('Error')) {
        this.loginError = true;
      } else {
        this.isAuthenticated = true;
        this.loginError = false;
        this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(content);
      }
    });
  }

  private getHtmlContent(username: string, password: string): Observable<string> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(`${username}:${password}`)
    });

    return this.http.get('https://chooseagencia.com/api/electoral.php', { headers, responseType: 'text' }).pipe(
      catchError(error => {
        console.error('Error fetching HTML content', error);
        return of('Error loading content');
      })
    );
  }
}
