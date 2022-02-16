import {
  RegistrationController,
  IRegistrationController,
} from "./registration";

class Controller {
  private static controller: Controller;
  private registration: IRegistrationController;

  private constructor() {
    this.registration = new RegistrationController();
  }

  public static getInstance(): Controller {
    if (!this.controller) {
      this.controller = new Controller();
    }
    return this.controller;
  }

  public getRegistrationController(): RegistrationController {
    return this.registration;
  }
}

export default Controller.getInstance();
