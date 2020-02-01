import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../servicios/album.service';
import { ApidiscotecaService } from '../servicios/apidiscoteca.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-buscadiscoapi',
  templateUrl: './buscadiscoapi.component.html',
  styleUrls: ['./buscadiscoapi.component.css']
})

export class BuscadiscoapiComponent implements OnInit {

  strArtista: string;
  strAlbum: string;
  album: Album;
  tracks:any[];
  message:string;
  isSearchData:boolean = true;

  constructor(
    protected userService:AlbumService,
    protected apiDiscotecaService:ApidiscotecaService
  ) { }

  ngOnInit() {
  }

  sendValues(): void {

    this.isSearchData =  this.validateSearchData();

    if (this.isSearchData) {
      this.userService.getInfoAlbum(this.strArtista,this.strAlbum).subscribe(
        (data) => {
          if (data['error']) {
            this.message = data['message'];
          } else {
            this.album = data['album'];        
            this.album.artist =  this.album['artist'];
            this.album.image = this.album['image'][3]['#text'];
            this.album.title = this.album['name'];
            this.tracks = this.album['tracks']['track'];
            this.album.songs = this.getSongs (this.tracks);
            this.album.published = this.album['wiki']['published'];
            this.album.content = this.album['wiki']['content'];
            this.album.summary = this.album['wiki']['summary'];
  
            // console.log(this.album.songs);
          }
        }
      );
    }
  }

  validateSearchData():boolean {

    let isSearchDataOk:boolean = true;
    this.message = '';

    if (!this.strArtista) {
      this.message = 'Debe indicar algún criterio de búsqueda';
      isSearchDataOk = false;
    } 

    return isSearchDataOk;
  }

  getSongs (dataTracks):string[] {
    
    let songs:string[] = new Array();
    let numSongs:number;
    let i:number;

    numSongs = Object.keys(this.tracks).length;

    for (i = 0;i < numSongs; i++) {
      songs.push(dataTracks[i]['name']);
    }

    return songs;
  }

  saveAlbum():void {

    this.apiDiscotecaService.postAlbum(this.album).subscribe(
      data => {
        this.message = data.message;
        console.log(data.message);
      },
      Error => {
        console.log(Error.message);
      });
  }

}
