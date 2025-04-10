import { Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { StationaryComponent } from './stationary/stationary.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FoodhomeComponent } from './foodhome/foodhome.component';

export const routes: Routes = [
  { path: '', component: FoodhomeComponent},
  { path: 'food', component: FoodComponent },
  { path: 'stationary', component: StationaryComponent },
  { path: 'electronics', component: ElectronicsComponent }
];