import { LibraryAppPage } from './app.po';

describe('library-app App', () => {
  let page: LibraryAppPage;

  beforeEach(() => {
    page = new LibraryAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
