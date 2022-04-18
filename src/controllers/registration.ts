type APIRegistrationRequest = {
  studID: string;
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
    const voiceBuffer = await req.voice.arrayBuffer();
    const voiceIntArr = new Int8Array(voiceBuffer);

    const reqBody: APIRegistrationRequest = {
      studID: req.studentID,
      userName: req.username,
      // TODO: Implement
      faceImg: "test",
      rawAudio: Array.from(voiceIntArr),
    };

    const result = await fetch(
      new Request(`${import.meta.env.VITE_API_HOST}/voice-samples`, {
        method: "POST",
        body: JSON.stringify(reqBody),
      })
    );

    if (result.status != 200 && result.status != 201) {
      const resBody: APIRegistrationResponse = await result.json();
      throw new Error(resBody.error);
    }
  }
}
