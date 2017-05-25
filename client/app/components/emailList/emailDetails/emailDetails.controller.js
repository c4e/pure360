class EmailDetailsController {
  constructor(EmailService, $stateParams) {
    'ngInject';
    this.email = {};
    this.formatHTML = true;
    this.EmailService = EmailService;
    this.$stateParams = $stateParams;
  }

  $onInit() {
    this.EmailService.getEmailById(this.$stateParams.id)
    .then((resp) => {
      this.email = resp;
    });
  }
}

export default EmailDetailsController;
