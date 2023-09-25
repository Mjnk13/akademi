//styles
import styles from "@/app/_styles/dashboard.module.scss"

//types
import { message } from "@/types/message";

const MessagesItem = (props:message) => {
    return (
        <div className={styles.dashboard__rightMenu__messages__list__item}>
            <div className={styles.dashboard__rightMenu__messages__list__item__avatar}></div>
            <div className={styles.dashboard__rightMenu__messages__list__item__info}>
                <p className="text-semibold-2">{props.name}</p>
                <p className={`text-regular-2 ${styles.dashboard__rightMenu__messages__list__item__info__text}`}>{props.text}</p>
            </div>
            <p className="text-regular-2" style={{alignSelf: "flex-start"}}>{props.time}</p>
        </div>
    );
}
 
export default MessagesItem;