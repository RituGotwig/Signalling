import { Component, signal, effect, OnInit} from '@angular/core';
import { ListService } from '../list.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';


@Component({
  selector: 'app-foodhome',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './foodhome.component.html',
  styleUrl: './foodhome.component.css'
})
export class FoodhomeComponent implements OnInit{
  constructor(private listService: ListService, private localStorageServiece: LocalStorageService){ 
    
  }
  ngOnInit() {
    // Load data from localStorage when the component initializes
    this.localStorageServiece.rememberFood();
    this.localStorageServiece.rememberElectronics();
    this.localStorageServiece.rememberStationary();
  }
 
  foodToBuy = this.listService.foodToBuy;
  stationaryToBuy = this.listService.stationaryToBuy;
  electronicsToBuy= this.listService.electronicsToBuy;
 
}
