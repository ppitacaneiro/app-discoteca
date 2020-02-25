import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 


import { AppComponent } from './app.component';
import { AlbumService } from './servicios/album.service';
import { ApidiscotecaService } from './servicios/apidiscoteca.service';
import { FormsModule } from '@angular/forms';
import { AltadiscoComponent } from './altadisco/altadisco.component';
import { routing } from './app.routing';
import { BuscadiscoapiComponent } from './buscadiscoapi/buscadiscoapi.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MidiscotecaComponent } from './midiscoteca/midiscoteca.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    AltadiscoComponent,
    BuscadiscoapiComponent,
    NavbarComponent,
    MidiscotecaComponent,
    NoimagePipe,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [AlbumService,ApidiscotecaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
