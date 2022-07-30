type IdentificationRequest = {
  voice: Blob;
};

type IdentificationResponse = {
  username: string;
  similarity: number;
};
