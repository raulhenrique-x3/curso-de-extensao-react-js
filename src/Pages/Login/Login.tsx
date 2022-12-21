import { UserInputs } from "../../Components/UserInputs";
import img from "../../Assets/img.jpg";
import styles from "./login.module.scss";

export const Login = () => {
  return (
    <main className={styles.loginContainer}>
      <div className={styles.imgDiv}>
        <img src={img} className={styles.img} />
      </div>
      <form method="post" className={styles.loginForm}>
        <div className={styles.formContent}>
          <h2 className={styles.loginTitle}>Login</h2>
          <div className={styles.userInputs}>
            <UserInputs placeHolder="Digite seu email" text="Email" type="text" />
            <UserInputs placeHolder="Digite sua senha" text="Senha" type="password" />
            <button type="submit" className={styles.button}>
              Acessar
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};
