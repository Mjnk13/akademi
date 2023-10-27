//styles
import styles from "@/app/_styles/components/input.module.scss"

type props = {
    title: string,
    inputPlaceHolder: string | [string, string]
    type: "input" | "textarea" | "file"
}

const inputField = (props: props) => {
    return (
        <div className={styles.inputGroup}>
            <p className="text-semibold-1">First Name *</p>
            { typeof props.inputPlaceHolder === "string" && props.type === "input" && <input className="text-regular-2" type="text" placeholder={props.inputPlaceHolder}/> }
            { typeof props.inputPlaceHolder === "object" && props.type === "input" && <div className={styles.inputGroup__doubleInput}>
                <div className={styles.inputGroup__doubleInput__wrapper}>
                    <input className="text-regular-2" type="text" placeholder={props.inputPlaceHolder[0]}/>
                </div>
                <div className={styles.inputGroup__doubleInput__wrapper}>
                    <input className="text-regular-2" type="text" placeholder={props.inputPlaceHolder[1]}/>
                </div>
            </div> }
            { typeof props.inputPlaceHolder === "string" && props.type === "textarea" && <textarea className="text-regular-2" placeholder={props.inputPlaceHolder}/> }
            { typeof props.inputPlaceHolder === "string" && props.type === "file" &&
                <div className={styles.inputGroup__importFile}>
                    <p className={`text-regular-2 ${styles.inputGroup__importFile__placeholder}`}>{props.inputPlaceHolder}</p>
                </div>
            }
        </div>
    );
}
 
export default inputField;