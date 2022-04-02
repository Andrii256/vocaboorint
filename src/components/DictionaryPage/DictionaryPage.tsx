import { FC } from "react";
import { DictionaryPageProps } from "./DictionaryPage.types";
import { Document } from "../../basic-components/Document/Document";
import { ButtonFilled } from "../../basic-components/ButtonFilled/ButtonFilled";
import { Link } from "react-router-dom";
import "./DictionaryPage.css";
import { useTextaria } from "../../hooks/useTextaria";
import { useTypedSelector } from "../../hooks/useTypedselector";
import { useDispatch } from "react-redux";
import { setDictionary } from "../../redux/dictionary/actionCreators";

export const DictionaryPage: FC<DictionaryPageProps> = () => {
  const dispatch = useDispatch();
  const dictionary = useTypedSelector((state) => state.dictionary);
  const initialValue = dictionary
    .map((word) => `${word.foreign}; ${word.native};`)
    .join("\n");
  const { textaria, value } = useTextaria(
    "DictionaryPage__textaria",
    initialValue,
  );

  return (
    <Document
      className="DictionaryPage"
      title="Specify your dictionary"
      goBackName="Start page"
    >
      <p className="DictionaryPage__explanation">
        Read more about at <Link to="/readme">Short guide</Link> page
        <br />* This page might be useful for you:{" "}
        <Link to="/analytics">analytics</Link>
      </p>

      {textaria}

      <ButtonFilled
        color="violet"
        className="DictionaryPage__submit"
        onClick={() => dispatch(setDictionary(value.toLocaleLowerCase()))}
      >
        Submit
      </ButtonFilled>
    </Document>
  );
};
