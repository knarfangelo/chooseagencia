import { Routes } from '@angular/router';
import { ChooseAgenciaComponent } from './components/choose-agencia/choose-agencia.component';
import { SubnosotrosComponent } from './components/nosotros/subnosotros/subnosotros.component';
import { SocialListeningComponent } from './components/servicios/social-listening/social-listening.component';
import { RegulacionContenidosComponent } from './components/servicios/regulacion-contenidos/regulacion-contenidos.component';
import { EnviosMasivosComponent } from './components/servicios/envios-masivos/envios-masivos.component';
import { DesarrolloWebComponent } from './components/servicios/desarrollo-web/desarrollo-web.component';
import { CreacionContenidoComponent } from './components/servicios/creacion-contenido/creacion-contenido.component';
import { ElectoralComponent } from './components/electoral/electoral.component';

export const routes: Routes = [
    { path: '', component: ChooseAgenciaComponent },
    { path: 'subnosotros', component:SubnosotrosComponent},
    { path: 'social-listening', component:SocialListeningComponent},
    { path: 'regulacion-contenido', component:RegulacionContenidosComponent},
    { path: 'envios-masivos', component:EnviosMasivosComponent},
    { path: 'desarrollo-web', component:DesarrolloWebComponent},
    { path: 'creacion-contenido', component:CreacionContenidoComponent},
    { path: 'electoral', component: ElectoralComponent}
];
