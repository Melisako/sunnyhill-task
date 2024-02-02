import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[] = []; 

  constructor() {
    
    this.products = [
      { id: 1, name: 'Product 1', category: 'Category 1', phone: '049808029', date: '2024-02-01' },
      { id: 2, name: 'Product 2', category: 'Category 2', phone: '044880122', date: '2024-02-02' }
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {

    product.id = this.products.length + 1;
    this.products.push(product);
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }
}


export interface Product {
  id?: number;
  name: string;
  category: string;
  phone: string;
  date: string;
}
