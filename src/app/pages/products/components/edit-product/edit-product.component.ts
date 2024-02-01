import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  @Input() product: any; 
  editedProduct: any = {}; 

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
   
    this.editedProduct = { ...this.product };
  }

  closeModal(): void {
    this.activeModal.dismiss(); 
  }

  editProduct(): void {
   
    this.activeModal.close(this.editedProduct);
  }
}
