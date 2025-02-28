import "../../App.css"
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat.jsx";


const socket = io.connect("http://localhost:3001");

function ChatApp() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Hi! Welcome here</h3>
          <input
            type="text"
            placeholder="Enter username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter ur OTp for chat"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join chat</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default ChatApp;

