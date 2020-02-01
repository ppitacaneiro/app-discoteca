import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AlbumService {

  apiKey:string = '9c232ca9b5b022afa31d7042ae946103';
  urlApi:string = 'http://ws.audioscrobbler.com/2.0/';
  apiMethod:string = 'album.getinfo';
  url:string;

  constructor(protected http:HttpClient) { }

  getInfoAlbum(Artista,Album) {

    this.url = this.urlApi + '?method=' + this.apiMethod + '&api_key=' + this.apiKey;
    this.url += '&artist=' + Artista + '&album=' + Album + '&format=json';
    
    return this.http.get(this.url);
  }
}
