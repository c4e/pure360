import EmailDetailsModule from './emailDetails';
import EmailDetailsController from './emailDetails.controller';
import EmailDetailsComponent from './emailDetails.component';
import EmailDetailsTemplate from './emailDetails.html';

describe('EmailDetails', () => {
  let $rootScope, $compile, makeController;

  beforeEach(window.module(EmailDetailsModule));
  beforeEach(inject(($injector, _$rootScope_) => {
    $rootScope = _$rootScope_;
    $compile = $injector.get('$compile');
    makeController = () => {
      return new EmailDetailsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has an email property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('email');
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

    it('should render the email name', () => {
      let scope = $rootScope.$new();
      scope.$ctrl = {
        email: {
          "id": "1",
          "profileId": "1",
          "name": "Name 1",
          "subjects": [
            "Subject 1",
            "Subject 2"
          ],
        }
      };
      let template = $compile(EmailDetailsTemplate)(scope);
      scope.$digest();
      expect(template.html()).to.contain('Name 1');
    });
  });
});
