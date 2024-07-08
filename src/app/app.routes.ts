import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConfiguracaoComponent } from './pages/configuracao/configuracao.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'configuracao',
    component: ConfiguracaoComponent,
  },
];
