import {RouterModule,Routes} from '@angular/router';
import {AltadiscoComponent} from './altadisco/altadisco.component';
import {BuscadiscoapiComponent} from './buscadiscoapi/buscadiscoapi.component';

const appRoutes = [
    {path:'altadisco',component:AltadiscoComponent,pathMath:'full'},
    {path:'buscadiscoapi',component:BuscadiscoapiComponent,pathMath:'full'}
];

export const routing = RouterModule.forRoot(appRoutes);