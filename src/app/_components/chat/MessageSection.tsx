//styles
import styles from "@/app/_styles/chat.module.scss"

//components
import LeftSide from "./subComponent/LeftSide"
import RightSide from "./subComponent/RightSide"

const MessageSection = () => {
    return (
        <div className={styles.chat__messageSection}>
            <LeftSide/>
            <RightSide/>
        </div>
    );
}
 
export default MessageSection;