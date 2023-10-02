//styles
import styles from "@/app/_styles/chat.module.scss";

//components
import Heading from "../_components/chat/Heading";
import MessageSection from "../_components/chat/MessageSection";

const Chat = () => {
    return (
        <div className={styles.chat}>
            <Heading/>
            <MessageSection/>
        </div>
    );
}
 
export default Chat;