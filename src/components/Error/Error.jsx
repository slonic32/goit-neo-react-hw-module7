import css from "./Error.module.css";
import { useSelector } from "react-redux";
import { selectError } from "../../redux/contactsSlice";

export default function ErrorMessage() {
  const error = useSelector(selectError);
  return <p className={css.error}>{error}</p>;
}
