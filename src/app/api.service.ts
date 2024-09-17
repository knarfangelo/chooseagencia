import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://chooseagencia.com/api/api.php'; // Reemplaza con la URL de tu API PHP

  constructor(private http: HttpClient) {}
  // Método para obtener datos (GET)
  getContactos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para insertar datos (POST)
  addPersona(contacto: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, contacto, { headers });
  }

  // Método para borrar datos (DELETE)
  deletePersona(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
