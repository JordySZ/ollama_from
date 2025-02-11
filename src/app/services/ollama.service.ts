import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // <-- Esto asegura que el servicio esté disponible globalmente
})
export class OllamaService {
  private apiUrl = 'http://localhost:11434/api/generate';

  constructor(private http: HttpClient) {}

  generarTexto(mensaje: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { model: "llama3.2", prompt: mensaje, stream: false });
  }
}
