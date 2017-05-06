import { PracteecegolfPage } from './app.po';

describe('practeecegolf App', () => {
  let page: PracteecegolfPage;

  beforeEach(() => {
    page = new PracteecegolfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
