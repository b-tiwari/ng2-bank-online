import { BankOneOnlinePage } from './app.po';

describe('bank-one-online App', function() {
  let page: BankOneOnlinePage;

  beforeEach(() => {
    page = new BankOneOnlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
