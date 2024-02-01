import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule,RouterLink,RouterOutlet],
  templateUrl: './layout.component.html',

  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {


}
