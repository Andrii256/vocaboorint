import { getFromLS } from "../../utils/getFromLS";

interface Word {
  foreign: string;
  native: string;
}

export type DictionaryState = Array<Word>;

const defaultDictionary: DictionaryState = [
  { foreign: "many", native: "багато" },
  { foreign: "cloud", native: "хмара" },
  { foreign: "justice", native: "справедливість" },
  { foreign: "people", native: "люди" },
  { foreign: "person", native: "людина" },
  { foreign: "say", native: "казати" },
  { foreign: "word", native: "слово" },
  { foreign: "first", native: "перший" },
  { foreign: "table", native: "стіл" },
  { foreign: "apple", native: "ябко" },
  { foreign: "birthday", native: "день народження" },
  { foreign: "javelin", native: "свиноубивця" },
  { foreign: "putin", native: "хуйло" },
  { foreign: "russians", native: "свинособаки" },
  { foreign: "nestle", native: "запроданці" },
  { foreign: "Ukraine", native: "переможе" },
];

export const initialState: DictionaryState =
  getFromLS<DictionaryState>("__vot_dictionary") ?? defaultDictionary;
