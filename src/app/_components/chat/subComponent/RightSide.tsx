//styles
import styles from "@/app/_styles/chat.module.scss"

//icons
import VideoIcon from "../../icon/VideoIcon"
import DotsIcon from "../../icon/DotsIcon"
import SendIcon from "../../icon/SendIcon"
import AttachmentIcon from "../../icon/AttachmentIcon"

const RightSide = () => {
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
                    <div className={`${styles.chat__messageSection__rightSide__wrapper__body__messageOther} ${styles["chat__messageSection__rightSide__wrapper__body__messageOther--rounded"]}`}>
                        <p className={`text-regular-1 ${styles.chat__messageSection__rightSide__wrapper__body__messageOther__text}`}>Hello Minh!</p>
                    </div>
                    <div className={`${styles.chat__messageSection__rightSide__wrapper__body__messageOther}  ${styles["chat__messageSection__rightSide__wrapper__body__messageOther--bubbleChat"]}`}>
                        <p className={`text-regular-1 ${styles.chat__messageSection__rightSide__wrapper__body__messageOther__text}`}>Can i see your history lesson homework?</p>
                    </div>
                    <p className={`text-regular-2 ${styles.chat__messageSection__rightSide__wrapper__body__time}`}>12:45 PM</p>
                    <div className={`${styles.chat__messageSection__rightSide__wrapper__body__messageMe} ${styles["chat__messageSection__rightSide__wrapper__body__messageMe--rounded"]}`}>
                        <p className={`text-regular-1 ${styles.chat__messageSection__rightSide__wrapper__body__messageMe__text}`}>Hello Samantha!</p>
                    </div>
                    <div className={`${styles.chat__messageSection__rightSide__wrapper__body__messageMe}  ${styles["chat__messageSection__rightSide__wrapper__body__messageMe--bubbleChat"]}`}>
                        <p className={`text-regular-1 ${styles.chat__messageSection__rightSide__wrapper__body__messageMe__text}`}>I’m not finished yet, why don’t work together to finish homework?</p>
                    </div>
                    <p className={`text-regular-2 ${styles.chat__messageSection__rightSide__wrapper__body__time} ${styles["chat__messageSection__rightSide__wrapper__body__time--right"]}`}>12:45 PM</p>
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