import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChatBox from '../components/Chat/ChatBox';

function uuidv4() {
  return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const data = {
  userName: "guest-" + uuidv4(),
};

const apiBaseUrl = "https://jamb.azurewebsites.net";

const Index = () => {
  const [isReady, setIsReady] = useState(false);
  const [messages, setMessages] = useState([{sender:"test", text:'bla bla'}]);

  const sendMessageClick = (messageText) => {
    sendMessage(data.userName, messageText);
  };

  function sendMessage(sender, messageText) {
    return axios.post(`${apiBaseUrl}/api/messages`, {
      sender: sender,
      text: messageText
    }).then(resp => resp.data);
  }

  let counter = 0;
  function newMessage(message) {
    message.id = counter++;
    messages.unshift(message);
    setMessages([...messages]);
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
      <h1>JAMB</h1>
      <div>{data.userName}</div>
      <div>{isReady ? "Connected" : "Loading..."}</div>
      <div>
        <ChatBox messages={messages} onSendMessage={sendMessageClick} />
      </div>
    </div>
  );
};

export default Index;