import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './components/edit-product/edit-product.component';



@NgModule({
  declarations: [ProductsComponent, AddProductComponent, EditProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
