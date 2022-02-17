export interface IIdentificationController {
  getVoiceOwner: (
    req: IdentificationRequest
  ) => Promise<IdentificationResponse>;
}

export class IdentificationController implements IIdentificationController {
  public async getVoiceOwner(
    req: IdentificationRequest
  ): Promise<IdentificationResponse> {
    // TODO: Implement
    const p = new Promise((resolve) => {
      setTimeout(() => resolve(true), 500);
    });
    await p;

    return {
      studentId: "12345",
      username: "doba",
    };
  }
}
