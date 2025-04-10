import { Component, signal, effect} from '@angular/core';
import { ListService } from '../list.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-foodhome',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './foodhome.component.html',
  styleUrl: './foodhome.component.css'
})
export class FoodhomeComponent {
  constructor(private listService: ListService){ 
    effect(() => {
      console.log('Food to buy changed:', this.listService.foodToBuy());
    });
  }

  foodToBuy = this.listService.foodToBuy;
  stationaryToBuy = this.listService.stationaryToBuy;
  electronicsToBuy= this.listService.electronicsToBuy;
 
}
