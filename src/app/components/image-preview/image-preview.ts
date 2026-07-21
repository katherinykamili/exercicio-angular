import { Component } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  imports: [],
  templateUrl: './image-preview.html',
  styleUrl: './image-preview.css',
})
export class ImagePreview {
  // URL digitada e estado de erro usados pelo conteúdo condicional do template.
  imageUrl = '';
  imageError = false;

  protected updateImageUrl(event: Event): void {
    // Converte o alvo genérico do evento em input para acessar seu valor.
    this.imageUrl = (event.target as HTMLInputElement).value.trim();
    this.imageError = false;
  }

  protected markImageAsInvalid(): void {
    // Chamado pelo evento error quando a imagem não pode ser carregada.
    this.imageError = true;
  }
}
