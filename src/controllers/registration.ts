type APIRegistrationRequest = {
  userName: string;
  faceImg: string;
  rawAudio: Array<number>;
};

type APIRegistrationResponse = {
  error: string;
};

export interface IRegistrationController {
  registerVoice: (req: RegistrationRequest) => Promise<void>;
}

export class RegistrationController implements IRegistrationController {
  public async registerVoice(req: RegistrationRequest) {
    const formData = new FormData();
    formData.append("studID", req.username);
    formData.append("rawAudio", req.voice);
    // TODO: Implement
    formData.append("faceImg", "test");

    const result = await fetch(
      new Request(`${import.meta.env.VITE_API_HOST}/voice-samples`, {
        method: "POST",
        body: formData,
      })
    );

    if (result.status != 200 && result.status != 201) {
      const resBody: APIRegistrationResponse = await result.json();
      throw new Error(resBody.error);
    }
  }
}
