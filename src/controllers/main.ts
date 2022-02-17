import {
  IdentificationController,
  IIdentificationController,
} from "./identification";
import {
  RegistrationController,
  IRegistrationController,
} from "./registration";

class Controller {
  private static controller: Controller;
  private registration: IRegistrationController;
  private identification: IIdentificationController;

  private constructor() {
    this.registration = new RegistrationController();
    this.identification = new IdentificationController();
  }

  public static getInstance(): Controller {
    if (!this.controller) {
      this.controller = new Controller();
    }
    return this.controller;
  }

  public getRegistrationController(): IRegistrationController {
    return this.registration;
  }

  public getIdentificationController(): IIdentificationController {
    return this.identification;
  }
}

export default Controller.getInstance();
