//styles
import styles from "@/app/_styles/components/activity_list.module.scss"
import { Activity } from "@/types/activity"

type props = {
    data: Activity[],
    wordBreak15char: boolean
}

const ActivityList = (props: props) => {
    return (
        <ul className={styles.activityList}>
            { props.data.map((activity, index) => (
                <li key={`activity-${index}`} className={styles.activityList__liItem}>
                    <span className={styles.activityList__liItem__verticalDotsLeft}/>
                    <span className={styles.activityList__liItem__verticalLineLeft}/>
                    {activity.printMessage(props.wordBreak15char)}
                </li>
            ))}
        </ul>
    );
}
 
export default ActivityList;