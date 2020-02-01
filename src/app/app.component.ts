import { Component } from '@angular/core';
import { AlbumService } from './servicios/album.service';
import { ApidiscotecaService } from './servicios/apidiscoteca.service';
import { Album } from './models/album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor() {
  }

  ngOnInit() {
  }
  
  
}
