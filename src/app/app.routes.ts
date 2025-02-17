import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent} from './contact/contact.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'privacypolicy', component: PrivacypolicyComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'contact', component: ContactComponent}
];
