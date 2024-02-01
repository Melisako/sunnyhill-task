import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModalModule

// Import components, directives, pipes, etc. that belong to your module
// import { YourComponent } from './your-component';

@NgModule({
  declarations: [
    // Declare components, directives, pipes, etc.
    // YourComponent,
  ],
  imports: [
    CommonModule,
    NgbModalModule, // Import NgbModalModule
    // Other modules that this module depends on
  ],
  exports: [
    // Export components, directives, pipes, etc. if needed
    // YourComponent,
  ],
})
export class YourModuleNameModule { }
