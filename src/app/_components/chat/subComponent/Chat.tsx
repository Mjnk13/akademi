//styles
import styles from "@/app/_styles/chat.module.scss"

//types
import { chat } from "@/types/chat";

const Group = (props: chat) => {
    return (
        <div className={styles.chat__messageSection__leftSide__wrapper__chatList__item}>
            <div className={`${styles.chat__messageSection__leftSide__wrapper__chatList__item__avatar} ${styles[`chat__messageSection__leftSide__wrapper__chatList__item__avatar--grey2`]}`}></div>
            <div className={styles.chat__messageSection__leftSide__wrapper__chatList__item__info}>
                <div className={styles.chat__messageSection__leftSide__wrapper__chatList__item__info__nameAndMessageWrapper}>
                    <p className={`text-semibold-1 ${styles.chat__messageSection__leftSide__wrapper__chatList__item__info__nameAndMessageWrapper__name}`}>{props.name}</p>
                    <p className={`text-regular-2 ${styles.chat__messageSection__leftSide__wrapper__chatList__item__info__nameAndMessageWrapper__message}`}>{props.message}</p>
                </div>
                <div className={styles.chat__messageSection__leftSide__wrapper__chatList__item__info__timeAndNumUnreadMessageWrapper}>
                    <p className={`text-regular-2 ${styles.chat__messageSection__leftSide__wrapper__chatList__item__info__timeAndNumUnreadMessageWrapper__time}`}>{props.time}</p>
                    {   props.numOfUnreadMessage > 0 && <p className={`text-regular-2 ${styles.chat__messageSection__leftSide__wrapper__chatList__item__info__timeAndNumUnreadMessageWrapper__numOfUnreadMessage}`}>{props.numOfUnreadMessage}</p> }
                </div>
            </div>
        </div>
    );
}
 
export default Group;