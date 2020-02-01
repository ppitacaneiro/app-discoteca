import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { FormControl,FormBuilder,FormGroup,Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-altadisco',
  templateUrl: './altadisco.component.html',
  styleUrls: ['./altadisco.component.css']
})
export class AltadiscoComponent implements OnInit {

  album: Album;
  altaDiscoForm: FormGroup;
  submitted:boolean;
  
  constructor(private formBuilder:FormBuilder) { 
    this.album = new Album();
  }

  ngOnInit() {

    this.altaDiscoForm = this.formBuilder.group({
      artistName : ['',Validators.required],
      titleAlbum : ['',Validators.required],
      datePublished : [''],
      ressumeForm : [''],
      infoForm : [''],
      songsName : this.formBuilder.array([
        this.formBuilder.group({
          songName:['']
        })
      ])
    })

  }

  get getSongsFormFields() {
    return this.altaDiscoForm.get('songsName') as FormArray;
  }

  get getFormFields() {
    return this.altaDiscoForm.controls;
  }

  getSongs(inputSongName:FormGroup) {
    let numSongs:number = this.getSongsFormFields.controls.length;
    let songsTitles:string[] = [];

    for (let i = 0;i < numSongs; i++) {
      songsTitles.push(inputSongName[i].songName);
    }

    return songsTitles;
  }

  removeSongField(index:number) {
    const control = <FormArray>this.altaDiscoForm.controls['songsName'];
    control.removeAt(index);
  }

  addSongField() {
    const control = <FormArray>this.altaDiscoForm.controls['songsName'];
    control.push(this.formBuilder.group({songName:[]}));
  }
    
  onSubmit() {
    this.submitted = true;

    if (this.altaDiscoForm.invalid) {
      return;
    }

    this.album.artist = this.altaDiscoForm.value['artistName'];
    this.album.title = this.altaDiscoForm.value['titleAlbum'];
    this.album.published = this.altaDiscoForm.value['datePublished'];
    this.album.summary = this.altaDiscoForm.value['ressumeForm'];
    this.album.content = this.altaDiscoForm.value['infoForm'];
    this.album.songs = this.getSongs(this.altaDiscoForm.value['songsName']);

    console.log(this.album.songs);
    
    /*
    console.log(
      'artist => ' + this.album.artist +
      'title => ' + this.album.title +
      'published => ' + this.album.published +
      'summary => ' + this.album.summary +
      'content => ' + this.album.content + 
      'songs => ' + this.album.songs
    );
    */
    
  }

}
