type APIIdentificationResponse = {
  error: string;
  user: {
    studID: string;
  };
  similarity: number;
};

export interface IIdentificationController {
  getVoiceOwner: (
    req: IdentificationRequest
  ) => Promise<IdentificationResponse>;
}

export class IdentificationController implements IIdentificationController {
  public async getVoiceOwner(
    req: IdentificationRequest
  ): Promise<IdentificationResponse> {
    const formData = new FormData();
    formData.append("rawAudio", req.voice);

    const result = await fetch(
      new Request(`${import.meta.env.VITE_API_HOST}/identify`, {
        method: "POST",
        body: formData,
      })
    );

    const resBody: APIIdentificationResponse = await result.json();

    if (result.status != 200) {
      throw new Error(resBody.error);
    }

    return {
      studentId: resBody.user.studID,
    };
  }
}
