import { Component, OnInit, Input } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Http } from '../../../node_modules/@angular/http';

@Component({
  selector: 'app-artist-tabs',
  templateUrl: './artist-tabs.component.html',
  styleUrls: ['./artist-tabs.component.css']
})
export class ArtistTabsComponent implements OnInit {

  @Input() artistList: any[];
  selectedArtist: any;

  constructor(
    private _http: Http) { }


  ngOnInit() {
    if (this.artistList) {
      this.artistList.forEach(element => {
        element.active = false;
      });
      this.artistList[0].active = true;
      this.selectedArtist = this.artistList[0];
    }
  }

  getSelectedArtist(artist: any): void {
    this.getArtists(artist).subscribe((res: any) => {
      if (res && res.results && res.results.length > 0) {
        this.selectedArtist = res.results[0];
      }
    });
  }
  getArtists(artist: any): Observable<any> {
    return this._http
      .get('http://itunes.apple.com/search?term=' + artist.artistName + '&limit=1')
      .map((res: any) => res.json());
  }
}
