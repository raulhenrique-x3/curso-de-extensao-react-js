import styles from "../Pages/Login/login.module.scss";

interface IProps {
  type?: "text" | "password";
  placeHolder: string;
  text?: string;
}

export const UserInputs: React.FC<IProps> = ({ type, placeHolder, text }) => {
  return (
    <div>
      <h3>{text}</h3>
      <input type={type} placeholder={placeHolder} className={styles.userInput} />
    </div>
  );
};
