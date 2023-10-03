//styles
import styles from "@/app/_styles/chat.module.scss"

//types
import { message } from "@/types/chat";

//icons
import VideoIcon from "../../icon/VideoIcon";
import DotsIcon from "../../icon/DotsIcon";
import SendIcon from "../../icon/SendIcon";
import AttachmentIcon from "../../icon/AttachmentIcon";

const RightSide = () => {
    const messages: message[] = [
        {
            text: "Hello Minh!",
            time: "12:45 PM",
            by: "other",
        },
        {
            text: "Hello Minh!",
            time: "12:45 PM",
            by: "other",
        }
    ]

    return (
        <div className={styles.chat__messageSection__rightSide}>
            <div className={styles.chat__messageSection__rightSide__wrapper}>
                <div className={styles.chat__messageSection__rightSide__wrapper__header}>
                    <div className={styles.chat__messageSection__rightSide__wrapper__header__userChatWith}>
                        <div className={styles.chat__messageSection__rightSide__wrapper__header__userChatWith__avatar}></div>
                        <div className={styles.chat__messageSection__rightSide__wrapper__header__userChatWith__info}>
                            <h4 className={styles.chat__messageSection__rightSide__wrapper__header__userChatWith__info__name}>Samantha WIlliam</h4>
                            <div className={styles.chat__messageSection__rightSide__wrapper__header__userChatWith__info__status}>
                                <div className={styles.chat__messageSection__rightSide__wrapper__header__userChatWith__info__status__dotIndicator}></div>
                                <p className={`text-regular-1 ${styles.chat__messageSection__rightSide__wrapper__header__userChatWith__info__status__text}`}>Online</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.chat__messageSection__rightSide__wrapper__header__btnGroup}>
                        <button className={styles.chat__messageSection__rightSide__wrapper__header__btnGroup__video}><VideoIcon/></button>
                        <button className={styles.chat__messageSection__rightSide__wrapper__header__btnGroup__more}><DotsIcon/></button>
                    </div>
                </div>
                <div className={styles.chat__messageSection__rightSide__wrapper__body}>

                </div>
                <div className={styles.chat__messageSection__rightSide__wrapper__footer}>
                    <div className={styles.chat__messageSection__rightSide__wrapper__footer__sendMessageWrapper}>
                        <input type="text" placeholder="Write your message..." className={styles.chat__messageSection__rightSide__wrapper__footer__sendMessageWrapper__input}/>
                        <div className={styles.chat__messageSection__rightSide__wrapper__footer__sendMessageWrapper__btnGroup}>
                            <button className={styles.chat__messageSection__rightSide__wrapper__footer__sendMessageWrapper__btnGroup__attachment}><AttachmentIcon/></button>
                            <button className={styles.chat__messageSection__rightSide__wrapper__footer__sendMessageWrapper__btnGroup__send}>Send <SendIcon/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default RightSide;