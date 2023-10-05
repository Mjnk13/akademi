//react
import React from "react"

//styles
import styles from "@/app/_styles/latest_activity.module.scss"
import variables from "@/app/_styles/utils/variables.module.scss"

export type reminder = {
    task : string,
    color: string,
}

export type createdTask = {
    who: string,
    at: string,
    color: string
}

export type comment = createdTask

export type mentionYou = createdTask

export type addFile = {
    who: string,
    on: string,
    color: string
    numFiles: number,
}

export type changeTaskStatus = {
    who: string,
    task: string,
    status: string,
    color: string
}

export class Activity {
    private _type: string
    private _time: string
    private _data: reminder | createdTask | comment | mentionYou | addFile | changeTaskStatus

    constructor(type:string, time:string, data: reminder | createdTask | comment | mentionYou | addFile | changeTaskStatus) {
        this._type = type
        this._time = time
        this._data = data
    }

    get data(): reminder | createdTask | comment | mentionYou | addFile | changeTaskStatus {
        return this._data
    }

    printMessage(): React.ReactNode {
        switch (this._type) {
            case "Reminder":
                const data0: reminder = this._data as reminder
                return (
                    <div className={styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper}>
                        <p className={`text-regular-2 ${styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper__time}`}>{this._time}</p>
                        <p className={`text-regular-1 ${styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper__text}`}><span className={`text-semibold-1 ${styles["latestActivity__activitySection__sectionItems__ul__liItem__wrapper--reminder"]}`}>[REMINDER]</span> Due date of <span className="text-semibold-1" style={{color: variables[data0.color]}}>{data0.task}</span> task will be coming</p>
                    </div>
                )
            case "Create Task":
                const data1: createdTask = this._data as createdTask
                return (
                    <div className={styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper}>
                        <p className={`text-regular-2 ${styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper__time}`}>{this._time}</p>
                        <p className={`text-regular-1 ${styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper__text}`}><span className={`text-semibold-1 ${styles["latestActivity__activitySection__sectionItems__ul__liItem__wrapper--who"]}`}>{data1.who}</span> has created new task at <span className="text-semibold-1" style={{color: variables[data1.color]}}>{data1.at}</span></p>
                    </div>
                )
            case "Comment":
                const data2: comment = this._data as comment
                return (
                    <div className={styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper}>
                        <p className={`text-regular-2 ${styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper__time}`}>{this._time}</p>
                        <p className={`text-regular-1 ${styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper__text}`}><span className={`text-semibold-1 ${styles["latestActivity__activitySection__sectionItems__ul__liItem__wrapper--who"]}`}>{data2.who}</span> has commented at <span className="text-semibold-1" style={{color: variables[data2.color]}}>{data2.at}</span></p>
                    </div>
                )
            case "Mention You":
                const data3: mentionYou = this._data as mentionYou
                return (
                    <div className={styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper}>
                        <p className={`text-regular-2 ${styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper__time}`}>{this._time}</p>
                        <p className={`text-regular-1 ${styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper__text}`}><span className={`text-semibold-1 ${styles["latestActivity__activitySection__sectionItems__ul__liItem__wrapper--who"]}`}>{data3.who}</span> has mentioned you at <span className="text-semibold-1" style={{color: variables[data3.color]}}>{data3.at}</span></p>
                    </div>
                )
            case "Add File":
                const data4: addFile = this._data as addFile
                const imageFiles:React.ReactNode[] = []
                for (let i = 0; i < data4.numFiles; i++) {
                    imageFiles.push(
                        <div className={styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper__image__wrapper}>
                            <div className={styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper__image__wrapper__file}></div>
                        </div>
                    );
                }
                return (
                    <div className={styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper}>
                        <p className={`text-regular-2 ${styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper__time}`}>{this._time}</p>
                        <p className={`text-regular-1 ${styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper__text}`}><span className={`text-semibold-1 ${styles["latestActivity__activitySection__sectionItems__ul__liItem__wrapper--who"]}`}>{data4.who}</span> added {data4.numFiles} files on <span className="text-semibold-1" style={{color: variables[data4.color]}}>{data4.on}</span></p>
                        <div className={styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper__image}>
                            {imageFiles}
                        </div>
                    </div>
                )
                
            case "Change Task Status":
                const data5: changeTaskStatus = this._data as changeTaskStatus
                return (
                    <div className={styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper}>
                        <p className={`text-regular-2 ${styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper__time}`}>{this._time}</p>
                        <p className={`text-regular-1 ${styles.latestActivity__activitySection__sectionItems__ul__liItem__wrapper__text}`}><span className={`text-semibold-1 ${styles["latestActivity__activitySection__sectionItems__ul__liItem__wrapper--who"]}`}>{data5.who}</span> has moved <span className="text-semibold-1" style={{color: variables[data5.color]}}>"{data5.task}"</span> to <span className={`text-semibold-1 ${styles["latestActivity__activitySection__sectionItems__ul__liItem__wrapper--status"]}`}>{data5.status}</span></p>
                    </div>
                )
            default:
                return "something went wrong"
        }
    }
}

export type activitySectionItem = {
    time: string,
    activities: Activity[]
}