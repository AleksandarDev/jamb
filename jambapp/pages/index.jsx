import React, { useEffect, useState } from 'react';
import axios from 'axios';

const data = {
  userName: "userName",
};

const apiBaseUrl = "https://jamb.azurewebsites.net";

const Index = () => {
  const [isReady, setIsReady] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessageText, setNewMessageText] = useState('');

  const sendMessageClick = () => {
    sendMessage(data.userName, newMessageText);
  };

  function sendMessage(sender, messageText) {
    return axios.post(`${apiBaseUrl}/api/messages`, {
      sender: sender,
      text: messageText
    }).then(resp => resp.data);
  }

  let counter = 0;
  function newMessage(message) {
    message.id = counter++; // vue transitions need an id
    setMessages(messages.unshift(message));
  }

  useEffect(() => {
    const connection = new window.signalR.HubConnectionBuilder()
      .withUrl(`${apiBaseUrl}/api`)
      .configureLogging(window.signalR.LogLevel.Information)
      .build();

    connection.on('newMessage', newMessage);
    connection.onclose(() => console.log('disconnected'));

    connection.start()
      .then(() => setIsReady(true))
      .catch((err) => {console.error(err); setIsReady(false);});
  }, []);

  return (
    <div>
      <h1>Jamb</h1>
      <div>{isReady ? "Spajanje..." : "Spojen"}</div>
      <div>
        <input value={newMessageText} onChange={(e) => setNewMessageText(e.target.value)} />
        <button onClick={() => sendMessageClick()}>Salji</button>
      </div>
      <div>
        {messages.map((message) => (
          <div>({message.id}) {message.text}</div>
        ))}
      </div>
    </div>
  );
};

export default Index;