import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

const LoginPage = ({ setIsAuth }) => {
  //butona tıklanınca çalış
  const handleLogin = () => {
    // kullanıcının google hesabı ile kimliğini doğrula
    signInWithPopup(auth, provider).then((data) => {
      setIsAuth(true);

      //local ' e kullanıcı bilgilerini kaydet
      localStorage.setItem("token", data.user.refreshToken);
    });
  };
  return (
    <div className="container">
      <div className="login">
        <h1>Chat Odası</h1>
        <p>Devat Etmek İçin Giriş Yapın</p>
        <button onClick={handleLogin}>
          <img src="/g-logo.png" />
          <span>Google ile Gir</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
