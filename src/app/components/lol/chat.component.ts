import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <-- Importa FormsModule
import { CommonModule } from '@angular/common';
import { OllamaService } from '../../services/ollama.service';

@Component({
  selector: 'app-chat',
  standalone: true, 
  imports: [CommonModule, FormsModule],  
  providers: [OllamaService],  // <-- Agregar aquí si no está en otro lado
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  mensaje = '';
  respuesta = '';

  private ollamaService = inject(OllamaService);

  enviarMensaje() {
    if (this.mensaje.trim()) {
      console.log("Enviando mensaje:", this.mensaje); // <-- LOG

      this.ollamaService.generarTexto(this.mensaje).subscribe(
        (data) => {
          console.log("Respuesta del backend:", data); // <-- LOG
          this.respuesta = data.response || "Error en la respuesta";
        },
        (error) => {
          console.error("Error en la petición:", error); // <-- LOG
          this.respuesta = "Error en la comunicación con el servidor";
        }
      );
    }
  }
}
