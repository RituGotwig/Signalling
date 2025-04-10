import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import for template-driven forms
import { item } from '../app.component';
import { ListService } from '../list.service';


@Component({
  selector: 'app-food',
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterModule],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
  constructor(private listService: ListService){}
newItem: item = {name:"", quantity : 0 }
checkQuantity() {
  if (this.newItem.quantity > 0) {
    this.listService.addFoodItem(this.newItem);
    console.log(this.listService.foodToBuy());
    this.newItem = {name:"", quantity : 0 };
  } 
}


}
