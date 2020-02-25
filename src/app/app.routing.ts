import {RouterModule,Routes} from '@angular/router';
import {AltadiscoComponent} from './altadisco/altadisco.component';
import {BuscadiscoapiComponent} from './buscadiscoapi/buscadiscoapi.component';
import {MidiscotecaComponent} from './midiscoteca/midiscoteca.component';

const appRoutes = [
    {path:'altadisco',component:AltadiscoComponent,pathMath:'full'},
    {path:'buscadiscoapi',component:BuscadiscoapiComponent,pathMath:'full'},
    {path:'midiscoteca',component:MidiscotecaComponent,pathMath:'full'}
];

export const routing = RouterModule.forRoot(appRoutes);