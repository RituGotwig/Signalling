import { Injectable } from '@angular/core';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private listService: ListService) { }

  save() {
    // Save current lists to localStorage
    localStorage.setItem('foodItems', JSON.stringify(this.listService.foodToBuy()));
    localStorage.setItem('stationaryItems', JSON.stringify(this.listService.stationaryToBuy()));
    localStorage.setItem('electronicItems', JSON.stringify(this.listService.electronicsToBuy()));
  }

  rememberFood() {
    // Get food items from localStorage and update the signal in ListService
    const savedFoodItems = localStorage.getItem('foodItems');
    if (savedFoodItems) {
      const parsedFoodItems = JSON.parse(savedFoodItems);
      // Update the signal with parsed items
      this.listService._foodToBuy.update(() => parsedFoodItems);
    }
  }

  rememberStationary() {
    // Similar function for stationary items
    const savedStationaryItems = localStorage.getItem('stationaryItems');
    if (savedStationaryItems) {
      const parsedStationaryItems = JSON.parse(savedStationaryItems);
      this.listService._stationaryToBuy.update(() => parsedStationaryItems);
    }
  }

  rememberElectronics() {
    // Similar function for electronics items
    const savedElectronicsItems = localStorage.getItem('electronicItems');
    if (savedElectronicsItems) {
      const parsedElectronicsItems = JSON.parse(savedElectronicsItems);
      this.listService._electronicsToBuy.update(() => parsedElectronicsItems);
    }
  }
}
