import { ArtistAppPage } from './app.po';

describe('artist-app App', () => {
  let page: ArtistAppPage;

  beforeEach(() => {
    page = new ArtistAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
