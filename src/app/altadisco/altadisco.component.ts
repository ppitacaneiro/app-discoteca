import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { FormBuilder,FormGroup,Validators, FormArray } from '@angular/forms';
import { ApidiscotecaService } from '../servicios/apidiscoteca.service';

@Component({
  selector: 'app-altadisco',
  templateUrl: './altadisco.component.html',
  styleUrls: ['./altadisco.component.css']
})

export class AltadiscoComponent implements OnInit {

  album: Album;
  altaDiscoForm: FormGroup;
  submitted:boolean;
  fileData: File;
  previewUrl:any;
  messageUpload:string;
  messageCreatedAlbum:string;
  
  constructor(private formBuilder:FormBuilder,protected apiDiscotecaService:ApidiscotecaService) { 
    this.album = new Album();
  }

  ngOnInit() {

    this.altaDiscoForm = this.formBuilder.group({
      artistName : ['',Validators.required],
      titleAlbum : ['',Validators.required],
      datePublished : [''],
      ressumeForm : [''],
      albumImage : [''],
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
    // console.log(this.altaDiscoForm.value['albumImage']);

    this.apiDiscotecaService.postAlbum(this.album).subscribe(
      data => {
        console.log(data);
        this.messageCreatedAlbum = data.message;
      },
      Error => {
        console.log(Error);
      }
    );
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
  }

  uploadImage() {
    const formData = new FormData();
    formData.append('image', this.fileData);

    this.apiDiscotecaService.postImage(formData).subscribe (
      (res) => {
        console.log(res);
        this.messageUpload = res.message;
        this.album.image = res.url;
      },
      (err) => {  
        console.log(err);
      }
    );
  }
}
