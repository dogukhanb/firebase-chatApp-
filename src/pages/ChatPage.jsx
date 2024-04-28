import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useEffect, useState } from "react";

const ChatPage = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);
  // formun gönderilmesi
  const handleSubmit = async (e) => {
    e.preventDefault();

    // kolleksiyonun referansını al
    const messagesCol = collection(db, "messages");

    //koleksiyona yeni belge kaydet
    await addDoc(messagesCol, {
      text: e.target[0].value,
      room,
      sender: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
    // formu sıfırla

    e.target.reset();
  };
  // mevcur odada gönderilen mesajların verisini anlık olarak al
  useEffect(() => {
    // hangi koleksiyondaki verileri istiyorsak koleksiyonun referansını al
    const messagesCol = collection(db, "messages");

    // koleksiyondaki verileri al
    onSnapshot(messagesCol, (snapshot) => {
      //verilerin geçici olarak tutulacağı dizi
      const tempMsg = [];

      //dökümanları dön, verilerine eriş
      snapshot.docs.forEach((doc) => {
        tempMsg.push(doc.data());
      });
      //güncel mesajları state'e aktar
      setMessages(tempMsg);
    });
  }, []);

  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Farklı Oda</button>
      </header>
      <main>Mesajlar</main>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Mesajınızı Yazınız..." />
        <button>Gönder</button>
      </form>
    </div>
  );
};

export default ChatPage;
