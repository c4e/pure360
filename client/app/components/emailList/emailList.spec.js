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

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(EmailListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
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
