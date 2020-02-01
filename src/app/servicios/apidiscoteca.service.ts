import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Album } from '../models/album';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApidiscotecaService {

  urlApi : string = 'http://localhost:8080/api_discoteca/album/';
  postApi : string = 'create.php';

  constructor(protected http:HttpClient) { }

  httpOptions : any = {
    headers: new HttpHeaders ({
      'Content-Type':  'application/x-www-form-urlencoded',
    })
  };

  postAlbum(album: Album): Observable<any> {

    return this.http.post(this.urlApi + this.postApi, {
      "artist" : album.artist,
      "title" : album.title,
      "published" : album.published,
      "content" : album.content,
      "summary" : album.summary,
      "url_image" : album.image,
      "songs" : album.songs
    }, this.httpOptions);
  }

}


