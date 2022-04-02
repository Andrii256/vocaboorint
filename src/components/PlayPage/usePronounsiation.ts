import { useEffect, useState } from "react";
import { useAudio } from "react-use";
import { fetchAudio } from "../../utils/fetchAudio";

export const usePronounsiation = (word: string, canPlay: boolean) => {
  const [src, setSrc] = useState("");

  const [audio] = useAudio({
    src: src,
    autoPlay: true,
  });

  useEffect(() => {
    (async () => {
      if (!canPlay) {
        return;
      }

      const src = await fetchAudio(word);

      setSrc(src);
    })();
  }, [word]);

  return [audio];
};
