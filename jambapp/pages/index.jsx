import React, { useEffect, useState } from 'react';

const data = {
  userName: "userName",
};

const apiBaseUrl = "https://jamb.azurewebsites.net";

function sendMessage(sender, messageText) {
  return axios.post(`${apiBaseUrl}/api/messages`, {
    sender: sender,
    text: messageText
  }).then(resp => resp.data);
}

let counter = 0;
function newMessage(message) {
  message.id = counter++; // vue transitions need an id
  data.messages.unshift(message);
}

const Index = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const connection = new window.signalR.HubConnectionBuilder()
      .withUrl(`${apiBaseUrl}/api`)
      .configureLogging(window.signalR.LogLevel.Information)
      .build();

    connection.on('newMessage', newMessage);
    connection.onclose(() => console.log('disconnected'));

    connection.start()
      .then(() => setIsReady(true))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Jamb</h1>
      <div>{isReady ? "Spajanje..." : "Spojen"}</div>
    </div>
  );
};

export default Index;