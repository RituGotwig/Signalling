import { Component} from '@angular/core';
import { item } from '../app.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-foodhome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foodhome.component.html',
  styleUrl: './foodhome.component.css'
})
export class FoodhomeComponent {
foodToBuy : item[] = [ 
  {name: "popcorn", quantity: 1},
  {name: "Rice", quantity: 3},
  {name: "Toast", quantity: 2},
]
stationaryToBuy : item[] = [ 
  {name: "Notebook", quantity: 1},
  {name: "Pen", quantity: 5},
]
electronicsToBuy : item[] = [ 
  {name: "Toaster", quantity: 1},
  {name: "Rice Cooker", quantity: 1},
]
}
