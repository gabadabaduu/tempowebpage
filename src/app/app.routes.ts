import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'privacypolicy', component: PrivacypolicyComponent}
];
