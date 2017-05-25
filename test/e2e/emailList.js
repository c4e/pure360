// spec.js
describe('Should open pure360', function() {
  it('should have a title', function() {
    browser.get('http://localhost:3000');

    expect(browser.getTitle()).toEqual('pure360');
  });

  it('should have 3 emails', function() {
    browser.get('http://localhost:3000');

    expect(element.all(by.repeater('email in $ctrl.emails')).count()).toEqual(3);
  });
});