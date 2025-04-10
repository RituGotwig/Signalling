import { Injectable, signal, computed } from '@angular/core';
export type item = {
  name: string,
  quantity: number,
}


@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor() { }

  private _foodToBuy = signal<item[]>([
    { name: 'popcorn', quantity: 1 },
    { name: 'Rice', quantity: 3 },
    { name: 'Toast', quantity: 2 },
  ]);

  private _stationaryToBuy = signal<item[]>([
    { name: 'Notebook', quantity: 1 },
    { name: 'Pen', quantity: 5 },
  ]);

  private _electronicsToBuy = signal<item[]>([
    { name: 'Toaster', quantity: 1 },
    { name: 'Rice Cooker', quantity: 1 },
  ]);

  // Computed signals (re-evaluate when the underlying signals change)
  foodToBuy = computed(() => this._foodToBuy());
  stationaryToBuy = computed(() => this._stationaryToBuy());
  electronicsToBuy = computed(() => this._electronicsToBuy());

  // Methods to update the original signals
  addFoodItem(item: item) {
    this._foodToBuy.update(prev => [...prev, item]);
  }

  addStationaryItem(item: item) {
    this._stationaryToBuy.update(prev => [...prev, item]);
  }

  addElectronicsItem(item: item) {
    this._electronicsToBuy.update(prev => [...prev, item]);
  }

}
