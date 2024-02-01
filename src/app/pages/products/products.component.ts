import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModal from ng-bootstrap
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; // Import NgbActiveModal from ng-bootstrap
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductService } from '../../services/product.service';
import { EditProductComponent } from './components/edit-product/edit-product.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  constructor(private modalService: NgbModal, public productService: ProductService) { }

  openAddProductModal(): void {
    
    const modalRef = this.modalService.open(AddProductComponent, { size: 'lg' }); // Adjust size as needed
    modalRef.result.then((result) => {
      console.log(result);
      this.productService.addProduct(result);
      // Handle modal close result if needed
    }, (reason) => {
      // Handle modal dismissal reason if needed
    });
  }

  openEditProductModal(product: any): void {
    const productId = product['id'];
    const modalRef = this.modalService.open(EditProductComponent, { size: 'lg' }); // Adjust size as needed
    modalRef.componentInstance.product = this.productService.products.find(p => p.id === productId); // Pass the product to the modal
    modalRef.result.then((result) => {
      result['id'] = productId
      this.productService.updateProduct(result)
      // Handle modal close result if needed



    }, (reason) => {
      // Handle modal dismissal reason if needed
    });
  }

  deleteProductFromList(product: any){
    const productId = product['id'];
    this.productService.deleteProduct(productId)

  }


}