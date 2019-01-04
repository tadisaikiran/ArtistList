import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artistForm: FormGroup;
  isSubmitted = false;
  artistList: any[];
  viewTabs = false;

  constructor(
    private formBuilder: FormBuilder,
    private _http: Http
  ) { }

  ngOnInit() {
    this.createArtistForm();
  }

  createArtistForm(): void {
    this.artistForm = this.formBuilder.group({
      artistName: ['', [Validators.required]],
      limit: ['', [Validators.required]]
    });
  }

  getArtistList(artist: any, isValid: boolean): void {
    this.artistList = [];
    this.isSubmitted = true;
    console.log(artist);
    console.log(this.artistForm.controls);
    if (artist.artistName === 'jack' && artist.limit === 4 && isValid) {
    this.getArtists().subscribe((res: any) => {
      if (res && res.results && res.results.length > 0) {
        this.artistList = res.results;
        console.log(res);
        $('#myModal').hide();
        $('.modal-backdrop').remove();
        this.viewTabs = true;
        this.artistForm.reset();
        this.isSubmitted = false;
      }
    });
  }
  }
  
  aa() {
    this.viewTabs = false;
  }

  getArtists(): Observable<any> {
    return this._http
      .get('http://itunes.apple.com/search?term=jack&limit=4')
      .map((res: any) => res.json());
  }

}
