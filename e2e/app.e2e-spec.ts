import { FirebaseApiTestPage } from './app.po';

describe('firebase-api-test App', function() {
  let page: FirebaseApiTestPage;

  beforeEach(() => {
    page = new FirebaseApiTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
