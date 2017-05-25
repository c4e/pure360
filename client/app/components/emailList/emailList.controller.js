class EmailListController {
  constructor(EmailService) {
    'ngInject';
    this.emails = EmailService.emails;
  }
}

export default EmailListController;
