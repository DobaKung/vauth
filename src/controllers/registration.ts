export interface IRegistrationController {
  registerVoice: (req: RegistrationRequest) => Promise<void>;
}

export class RegistrationController implements IRegistrationController {
  public async registerVoice(req: RegistrationRequest) {
    console.log(req);
  }
}
