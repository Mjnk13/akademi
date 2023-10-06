//styles
import styles from "@/app/_styles/user_dashboard.module.scss"

//types
import { Activity, addFile, changeTaskStatus, createdTask, inviteYou } from "@/types/activity";
import ActivityList from "../../latest_activity/subComponent/ActivityList";

const LatestActivity = () => {
    const activities:Activity[] = [
        new Activity("Change Task Status", "2 March 2021, 13:45 PM", {
            who: "Karen Hope",
            task: "User Research",
            status: "Done",
            color: "colorOrange"
        } as changeTaskStatus),
        new Activity("Add File", "2 March 2021, 13:45 PM", {
            who: "Samantha William",
            on: "Photo's Assets",
            color: "colorYellow",
            numFiles: 4,
            showFiles: false
        } as addFile),
        new Activity("Invite You", "2 March 2021, 13:45 PM", {
            who: "Tony Soap",
            in: [
                {
                    task: "WireFraming",
                    color: "colorPurple"
                },
                {
                    task: "Hi-fidelity",
                    color: "colorGreen"
                }
            ]
        } as inviteYou),
        new Activity("Create Task", "2 March 2021, 13:45 PM", {
            who: "Samantha William",
            at: "Homepage UI",
            color: "colorRed"
        } as createdTask),
    ]
    return (
        <div className={styles.userDashboard__rightMenu__latestActivity}>
            <h3 className={styles.userDashboard__rightMenu__latestActivity__title}>Latest Activity</h3>
            <ActivityList data={activities} wordBreak15char={true}/>
        </div>
    );
}
 
export default LatestActivity;