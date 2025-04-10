import {Routes} from '@angular/router';
import {FoodComponent} from './food/food.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { StationaryComponent } from './stationary/stationary.component';
const routeConfig: Routes = [
    {
      path: 'food',
      component: FoodComponent,
      title: 'Food path',
    },
    {
      path: 'electronics',
      component: ElectronicsComponent,
      title: 'Electronics path',
    },
    {
      path: 'stationary',
      component: StationaryComponent,
      title: 'Stationary path',
    },
 
  ];
  export default routeConfig;