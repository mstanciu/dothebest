import { SportAppPage } from './app.po';

describe('sport-app App', () => {
  let page: SportAppPage;

  beforeEach(() => {
    page = new SportAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
