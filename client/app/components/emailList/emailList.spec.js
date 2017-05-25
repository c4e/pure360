import EmailListModule from './emailList';
import EmailListController from './emailList.controller';
import EmailListComponent from './emailList.component';
import EmailListTemplate from './emailList.html';

describe('EmailList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EmailListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EmailListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Component', () => {
    // component/directive specs
    let component = EmailListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(EmailListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(EmailListController);
    });
  });
});
