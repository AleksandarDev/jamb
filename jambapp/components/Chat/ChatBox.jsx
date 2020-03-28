import { useState } from "react";
import styles from './ChatBox.module.scss';

const ChatBox = (props) => {
    const {
        messages,
        onSendMessage
    } = props;
    const [messageText, setMessageText] = useState("");

    return (
        <div className={styles.root}>
            <ul className={styles.list}>
                {messages.map((message) => (
                    <li key={message.id} className={styles.messageBlock}>
                        <span className={styles.messageUser}>{message.sender}</span>
                        <span className={styles.messageContent}>{message.text}</span>
                    </li>
                ))}
            </ul>
            <div className={styles.inputContainer}>
                <input value={messageText} onChange={(e) => setMessageText(e.target.value)} />
                <button onClick={() => onSendMessage(messageText)}>Send</button>
            </div>
        </div>
    );
};

export default ChatBox;