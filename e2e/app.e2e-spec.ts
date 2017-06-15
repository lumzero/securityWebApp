import { SecurityWebAppPage } from './app.po';

describe('security-web-app App', () => {
  let page: SecurityWebAppPage;

  beforeEach(() => {
    page = new SecurityWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
