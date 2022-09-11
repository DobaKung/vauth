type IdentificationRequest = {
  voice: Blob;
};

type IdentificationResponse = {
  user: {userName: string};
  similarity: number;
}[]