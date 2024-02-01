import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  newProduct: any = {}; // Object to store new product data

  constructor(public activeModal: NgbActiveModal) {}

  closeModal(): void {
    this.activeModal.dismiss(); // Close the modal without passing any data
  }

  addProduct(): void {
    // Implement your logic to add the product
    // Once the product is added, you can close the modal and pass the new product data back to the parent component
    this.activeModal.close(this.newProduct);
  }
}
