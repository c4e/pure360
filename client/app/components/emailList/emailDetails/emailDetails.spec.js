import EmailDetailsModule from './emailDetails';
import EmailDetailsController from './emailDetails.controller';
import EmailDetailsComponent from './emailDetails.component';
import EmailDetailsTemplate from './emailDetails.html';

describe('EmailDetails', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EmailDetailsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EmailDetailsController();
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
      expect(EmailDetailsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = EmailDetailsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(EmailDetailsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(EmailDetailsController);
    });
  });
});
