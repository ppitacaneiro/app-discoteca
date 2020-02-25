import { Component, OnInit } from '@angular/core';
import { ApidiscotecaService } from '../servicios/apidiscoteca.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-midiscoteca',
  templateUrl: './midiscoteca.component.html',
  styleUrls: ['./midiscoteca.component.css']
})
export class MidiscotecaComponent implements OnInit {

  constructor(protected apiDiscotecaService:ApidiscotecaService) { }

  albums:Album[];
  loading:boolean;

  ngOnInit() {
  }
  
  onSubmit() {
    this.search();
  }

  search() {
   this.loading = true;
   this.apiDiscotecaService.getAlbums().subscribe(
      (data:any) => {
        this.albums = data;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
