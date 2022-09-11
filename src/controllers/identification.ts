export type APIIdentificationResponse = Array<{
  user: {
    userName: string;
  };
  similarity: number;
}>;

type APIIdentificationError = {error: string};

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


    if (result.status != 200) {
      const resError: APIIdentificationError = await result.json();
      throw new Error(resError.error);
    }

    const resBody: APIIdentificationResponse = await result.json();
    return resBody;
  }
}
