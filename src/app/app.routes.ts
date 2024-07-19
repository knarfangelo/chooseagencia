import { Routes } from '@angular/router';
import { ChooseAgenciaComponent } from './components/choose-agencia/choose-agencia.component';
import { SubnosotrosComponent } from './components/nosotros/subnosotros/subnosotros.component';

export const routes: Routes = [
    { path: '', component: ChooseAgenciaComponent },
    { path: 'subnosotros', component:SubnosotrosComponent}
];
