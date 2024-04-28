import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";

const App = () => {
  //kullanıcının yetkisi var mı
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));

  //kullanıcının hangi odaya girdiğinin state'i
  const [room, setRoom] = useState(null);

  // yetkisi yoksa giriş sayfasına yönlendir
  if (!isAuth) return <LoginPage setIsAuth={setIsAuth} />;
  // yetkisi varsa oda seçme sayfasına yönlendir
  return (
    <div className="container">
      {room ? (
        // oda seçildiyse > sohbet sayfası
        <ChatPage room={room} setRoom={setRoom} />
      ) : (
        // oda tanımsızsa > oda seçme sayfası
        <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
