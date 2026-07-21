import { Component } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  imports: [],
  templateUrl: './image-preview.html',
  styleUrl: './image-preview.css',
})
export class ImagePreview {
  imageUrl = '';
  imageError = false;

 protected updateImageUrl(event: Event): void {
    this.imageUrl = (event.target as HTMLInputElement).value.trim();
    this.imageError = false;
  }

  protected markImageAsInvalid(): void {
    this.imageError = true;
  }
}
