import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistTabsComponent } from './artist-tabs.component';

describe('ArtistTabsComponent', () => {
  let component: ArtistTabsComponent;
  let fixture: ComponentFixture<ArtistTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
