import React, { useEffect, useState } from "react";
import axios from "axios";
import ChatBox from "../components/Chat/ChatBox";
import Board from "../components/Board/Board";
import DiceSet from "../components/DiceSet/DiceSet";
import { Grid } from "@material-ui/core";
import styles from "./index.module.scss";

function uuidv4() {
  return "xxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const data = {
  userName: "guest-" + uuidv4()
};

const apiBaseUrl = "https://jamb.azurewebsites.net";

const Index = () => {
  const [isReady, setIsReady] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "test", text: "bla bla" }
  ]);

  const sendMessageClick = messageText => {
    sendMessage(data.userName, messageText);
  };

  function sendMessage(sender, messageText) {
    return axios
      .post(`${apiBaseUrl}/api/messages`, {
        sender: sender,
        text: messageText
      })
      .then(resp => resp.data);
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

    connection.on("newMessage", newMessage);
    connection.onclose(() => console.log("disconnected"));

    connection
      .start()
      .then(() => setIsReady(true))
      .catch(err => {
        console.error(err);
        setIsReady(false);
      });
  }, []);

  const handleDiceValueChange = newDiceValues => {
    console.log("Throw", newDiceValues);
    setBoardValues({
      ...boardValues,
      diceValues: newDiceValues,
      throwIndex: boardValues.throwIndex + 1
    });
  };

  const [boardValues, setBoardValues] = useState({
    numberScores: [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null]
    ],
    min: [null, null, null, null],
    max: [null, null, null, null],
    twoPairs: [null, null, null, null],
    scale: [null, null, null, null],
    full: [null, null, null, null],
    poker: [null, null, null, null],
    yamb: [null, null, null, null],
    downIndex: 0,
    upIndex: 12,
    announcementIndex: null,
    round: 0,
    throwIndex: 0,
    diceValues: [0, 0, 0, 0, 0]
  });
  const handleBoardValueSet = (action, newBoardValues) => {
    console.log("Action", action);
    if (action.value != null) {
      setBoardValues({
        ...newBoardValues,
        downIndex: newBoardValues.downIndex + (action.column === 0 ? 1 : 0),
        upIndex: newBoardValues.upIndex - (action.column === 1 ? 1 : 0),
        announcementIndex: null,
        throwIndex: 0,
        round: boardValues.round + 1,
        diceValues: [0, 0, 0, 0, 0]
      });
    } else if (action.isAnnouncement) {
      setBoardValues({
        ...newBoardValues,
        announcementIndex: action.row
      });
    } else {
      console.warning("Ignored user action");
    }
  };

  return (
    <div className={styles.root}>
      {/* <div>{data.userName}</div> */}
      {/* <div>{isReady ? "Connected" : "Loading..."}</div> */}
      <div>
        {/* <ChatBox messages={messages} onSendMessage={sendMessageClick} /> */}
      </div>
      <Grid container direction="row">
        <Grid item>
          <Board
            boardValues={boardValues}
            onBoardValuesChanged={handleBoardValueSet}
          />
        </Grid>
        <Grid item>
          <DiceSet
            currentRound={boardValues.round}
            throwIndex={boardValues.throwIndex}
            onDiceValueChange={handleDiceValueChange}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
