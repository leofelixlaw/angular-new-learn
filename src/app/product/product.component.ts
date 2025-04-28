import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, signal, WritableSignal } from '@angular/core';
import { Product } from './product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  private readonly apiUrl = 'https://dummyjson.com/products/';
  productId: WritableSignal<string> = signal('2');
  selectedProductId: string = '2';
  productResource = httpResource<Product>(
    () => ({
      url: `${this.apiUrl}${this.productId()}`,
      method: 'GET',
    }),
    { defaultValue: undefined }
  );
  
  ngOnInit() {
  }

  updateProduct() {
    this.productId.set(this.selectedProductId);
  }
  get product() {
    return this.productResource.value() ?? null;  // Return null if it's undefined
  }
  
}
