import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
]
export const AppRoutes = RouterModule.forRoot(routes);
