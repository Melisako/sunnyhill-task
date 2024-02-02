import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; 
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
    
    const modalRef = this.modalService.open(AddProductComponent, { size: 'lg' });  
    modalRef.result.then((result) => {
      console.log(result);
      this.productService.addProduct(result);
     
    }, (reason) => {
    
    });
  }

  openEditProductModal(product: any): void {
    const productId = product['id'];
    const modalRef = this.modalService.open(EditProductComponent, { size: 'lg' }); 
    modalRef.componentInstance.product = this.productService.products.find(p => p.id === productId); 
    modalRef.result.then((result) => {
      result['id'] = productId
      this.productService.updateProduct(result)




    }, (reason) => {

    });
  }

  deleteProductFromList(product: any){
    const productId = product['id'];
    this.productService.deleteProduct(productId)

  }


}