export interface IRegistrationController {
  registerVoice: (req: RegistrationRequest) => Promise<void>;
}

export class RegistrationController implements IRegistrationController {
  public async registerVoice(req: RegistrationRequest) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), 500);
    });
    await promise;
  }
}
