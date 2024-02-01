import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  @Input() product: any; // Input property to receive product data from parent component
  editedProduct: any = {}; // Initialize editedProduct object

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    // Copy product data to editedProduct
    this.editedProduct = { ...this.product };
  }

  closeModal(): void {
    this.activeModal.dismiss(); // Close the modal without passing any data
  }

  editProduct(): void {
    // Implement your logic to edit the product
    // Once the product is edited, you can close the modal and pass the edited product data back to the parent component
    this.activeModal.close(this.editedProduct);
  }
}
