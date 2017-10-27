import { SocialSharingPage } from './app.po';

describe('social-sharing App', function() {
  let page: SocialSharingPage;

  beforeEach(() => {
    page = new SocialSharingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
