export class EmailService {

  constructor($http, $sce) {
    'ngInject';
    this.$http = $http;
    this.$sce = $sce
  }

  get emails() {
    return this.$http.get('app/api/emails.json')
    .then((resp) => {
      return resp.data.collection.items;
    });
  }
  
  getEmailById(id) {
    return this.$http.get(`app/api/email-${id}.json`)
    .then((resp) => {
      let email = resp.data; 
      email.body.html = this.$sce.trustAsHtml(email.body.html);
      return email;
    });
  }
}