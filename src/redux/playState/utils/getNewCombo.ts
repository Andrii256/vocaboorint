import { RootState } from "../..";
import { getRandomIntegerFromNexceptX } from "../../../utils/getRandomIntegerFromN";
import { UpdateComboAction } from "../actionCreators";

export const getNewCombo = (
  getState: () => RootState,
): UpdateComboAction["payload"] => {
  const {
    dictionary,
    playState: { direction, currentWord },
  } = getState();

  const prevWordIndex =
    dictionary.findIndex(
      (word) => word.foreign === currentWord || word.native === currentWord,
    ) ?? 100500;
  const currentWordIndex = getRandomIntegerFromNexceptX(
    dictionary.length,
    prevWordIndex,
  );
  const wrongOppositeIndex = getRandomIntegerFromNexceptX(
    dictionary.length,
    currentWordIndex,
  );

  const payload: UpdateComboAction["payload"] = {
    currentWord:
      dictionary[currentWordIndex][
        direction === "foreign -> native" ? "foreign" : "native"
      ],
    correctTranslation:
      dictionary[currentWordIndex][
        direction === "foreign -> native" ? "native" : "foreign"
      ],
    wrongTranslation:
      dictionary[wrongOppositeIndex][
        direction === "foreign -> native" ? "native" : "foreign"
      ],
  };

  return payload;
};
