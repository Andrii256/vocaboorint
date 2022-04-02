type Data = Array<{
  phonetics?: Array<{
    text?: string;
    audio?: string;
  }>;
  // and many other properties, but I need not them
}>;

export const fetchAudio = async (word: string) => {
  try {
    const response = await window.fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    );
    const data: Data = await response.json();

    const pronounciation =
      data[0]?.phonetics?.find((item) => item.audio)?.audio ?? "";

    return pronounciation;
  } catch {
    return "";
  }
};
