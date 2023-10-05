//styles
import styles from "@/app/_styles/latest_activity.module.scss"

//components
import Heading from "../_components/latest_activity/Heading"
import ActivitySection from "../_components/latest_activity/ActivitySection";

const LatestActivity = () => {
    return (
        <div className={styles.latestActivity}>
            <Heading/>
            <ActivitySection/>
        </div>
    );
}
 
export default LatestActivity;