//styles
import styles from "@/app/_styles/dashboard.module.scss"
import variables from "@/app/_styles/utils/variables.module.scss"

//types
import { current_food } from "@/types/currentfood";

const CurrentFoodsMenuItem = (props:current_food) => {
    return (
        <div className={styles.dashboard__rightMenu__currentFoodsMenu__list__item}>
            <div className={styles.dashboard__rightMenu__currentFoodsMenu__list__item__placeHolder}></div>
            <p className="text-semibold-1">{props.title}</p>
            <p className={`text-regular-2 ${styles.dashboard__rightMenu__currentFoodsMenu__list__item__body}`}>{props.body}</p>
        </div>
    );
}
 
export default CurrentFoodsMenuItem;