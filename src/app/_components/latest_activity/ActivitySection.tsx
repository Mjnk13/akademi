//styles
import styles from "@/app/_styles/latest_activity.module.scss"

//types
import { Activity, activitySectionItem, addFile, changeTaskStatus, comment, createdTask, mentionYou, reminder } from "@/types/activity";
import ActivityList from "./subComponent/ActivityList";

const ActivitySection = () => {
    const activitySectionItems:activitySectionItem[] = [
        {
            time: "Today",
            activities: [
                new Activity("Create Task", "Monday, June 31 2020", {
                    who: "Karen Hope",
                    at: "History Lesson",
                    color: "colorOrange"
                } as createdTask),
                new Activity("Reminder", "Monday, June 31 2020", {
                    task: "Science Homework",
                    color: "colorRed"
                } as reminder),
                new Activity("Comment", "Monday, June 31 2020", {
                    who: "Tony Soap",
                    at: "Science Homework",
                    color: "colorRed"
                } as comment),
                new Activity("Add File", "Monday, June 31 2020", {
                    who: "Samantha William",
                    on: "Art Class",
                    color: "colorPurple",
                    numFiles: 4,
                } as addFile),
                new Activity("Change Task Status", "Monday, June 31 2020", {
                    who: "Karen Hope",
                    task: "Biology Homework",
                    status: "Done",
                    color: "colorGreen"
                } as changeTaskStatus),
            ]
        },
        {
            time: "Yesterday",
            activities: [
                new Activity("Mention You", "Monday, June 31 2020", {
                    who: "Karen Hope",
                    at: "History Lesson",
                    color: "colorYellow"
                } as mentionYou),
                new Activity("Mention You", "Monday, June 31 2020", {
                    who: "Nadila Adja",
                    at: "Programming Homework",
                    color: "colorPurple"
                } as mentionYou),
            ]
        }
    ]

    return (
        <div className={styles.latestActivity__activitySection}>
            { activitySectionItems.map((activitySectionItem, index) => (
                <div key={`section-item-${index}`} className={styles.latestActivity__activitySection__sectionItem}>
                    <h4 className={styles.latestActivity__activitySection__sectionItems__title}>{activitySectionItem.time}</h4>
                    <ActivityList data={activitySectionItem.activities} wordBreak15char={false} verticalDotsLeft="whiteOutlinePurple" verticalLineLeft="purple"/>
                </div>
            ))}
        </div>
    );
}
 
export default ActivitySection;