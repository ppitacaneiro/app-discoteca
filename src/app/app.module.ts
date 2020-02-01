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

@NgModule({
  declarations: [
    AppComponent,
    AltadiscoComponent,
    BuscadiscoapiComponent,
    NavbarComponent
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
