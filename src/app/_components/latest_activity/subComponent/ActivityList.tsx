//styles
import styles from "@/app/_styles/components/activity_list.module.scss"
import { Activity } from "@/types/activity"

type props = {
    data: Activity[],
    wordBreak15char: boolean,
    verticalDotsLeft: string,
    verticalLineLeft: string
}

const ActivityList = (props: props) => {
    return (
        <ul className={styles.activityList}>
            { props.data.map((activity, index) => (
                <li key={`activity-${index}`} className={styles.activityList__liItem}>
                    <span className={`${styles.activityList__liItem__verticalDotsLeft} ${styles[`activityList__liItem__verticalDotsLeft--${props.verticalDotsLeft}`]}`}/>
                    <span className={`${styles.activityList__liItem__verticalLineLeft} ${styles[`activityList__liItem__verticalLineLeft--${props.verticalLineLeft}`]}`}/>
                    {activity.printMessage(props.wordBreak15char)}
                </li>
            ))}
        </ul>
    );
}
 
export default ActivityList;