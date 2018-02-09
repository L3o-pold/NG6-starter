class RegisterController {
  constructor($state, baasicRegisterService) {
    "ngInject";

    this.name = 'register';
    this.baasicRegisterService = baasicRegisterService;

    this.user = {
      email: '',
      userName: '',
      password: '',
      //isApproved: true,
      activationUrl: $state.href('account-activation', {}, {absolute: true}) + '?activationToken={activationToken}',
      creationDate: new Date(),
      challengeIdentifier: '',
      challengeResponse: ''
    };
  }

  register() {
    baasicRegisterService.create(this.user)
      .success(function () {
        console.log('success');
      })
      .error(function (data, status) {
        //You can format your error messages based on status codes or specific error messages
        console.log(data);
        this.baasicRecaptchaService.reload();
      });
  };
}

export default RegisterController;
