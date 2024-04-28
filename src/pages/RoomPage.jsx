const RoomPage = ({ setIsAuth, setRoom }) => {
  // oturumu kapat
  const logout = () => {
    // state ' güncelle
    setIsAuth(false);

    //locali temizle
    localStorage.removeItem("token");
  };

  // oda ismini kaydet
  const handleSubmit = (e) => {
    // sayfa yenilemeyi engelle
    e.preventDefault();

    //inputtaki değeri al
    const room = e.target[0].value.toLowerCase();

    // girilecek odanıın state'ini güncelle
    setRoom(room);
  };
  return (
    <form onSubmit={handleSubmit} className="room-form">
      <h1>Chat Odası</h1>
      <p>Hangi Odaya Girmek İstiyorsunuz?</p>
      <input type="text" placeholder="ör:HaftaSonu" required />
      <button>Odaya Gir</button>
      <button>Çıkış Yap</button>
    </form>
  );
};

export default RoomPage;
