import { EmailService } from './email';

let emailService, emailsMock, $http, $httpBackend;

describe('EmailService', () => {

  beforeEach(inject(($injector) => {
    $httpBackend = $injector.get('$httpBackend');
    $http = $injector.get('$http');
    let $sce = $injector.get('$sce');
    emailService = new EmailService($http, $sce);

    emailsMock = { "collection": { "items": [{ "id": "1", "profileId": "1", "name": "Name 1", "subjects": ["Subject 1", "Subject 2"] }, { "id": "2", "profileId": "1", "name": "Name 2", "subjects": ["Subject 1"] }, { "id": "3", "profileId": "1", "name": "Name 3", "subjects": ["Subject 1"] }], "pageinfo": { "total": 3, "page": 1, "pageSize": 25 } } }
  }));

  it('should perform the GET request', () => {
    emailService.emails;
    $httpBackend.expectGET('app/api/emails.json').respond(200, emailsMock);
    $httpBackend.flush();
  });

  it('should response with correct data', () => {
    $httpBackend.whenGET('app/api/emails.json').respond(200, emailsMock);
    emailService.emails
      .then((resp) => {
        expect(resp).to.deep.equal(emailsMock.collection.items);
      });
    $httpBackend.flush();
  });
});