//styles
import styles from "@/app/_styles/components/input.module.scss"

type props = {
    title: string,
    inputPlaceHolder?: string | [string, string],
    radioOptions?: string[],
    type: "input" | "textarea" | "file" | "radio"
}

const inputField = (props: props) => {
    return (
        <div className={styles.inputGroup}>
            <p className="text-semibold-1">{props.title}</p>
            { typeof props.inputPlaceHolder === "string" && props.type === "input" && <input className="text-regular-2" type="text" placeholder={props.inputPlaceHolder}/> }
            { typeof props.inputPlaceHolder === "object" && props.type === "input" &&
                <div className={styles.inputGroup__doubleInput}>
                    <div className={styles.inputGroup__doubleInput__wrapper}>
                        <input className="text-regular-2" type="text" placeholder={props.inputPlaceHolder[0]}/>
                    </div>
                    <div className={styles.inputGroup__doubleInput__wrapper}>
                        <input className="text-regular-2" type="text" placeholder={props.inputPlaceHolder[1]}/>
                    </div>
                </div>
            }
            { typeof props.inputPlaceHolder === "string" && props.type === "textarea" &&
                <>
                    <textarea className="text-regular-2" placeholder={props.inputPlaceHolder}/> 
                    <p className={`text-regular-2 ${styles.inputGroup__characterLimited}`}>0/2000</p>
                </>
            }
            { typeof props.inputPlaceHolder === "string" && props.type === "file" &&
                <div className={styles.inputGroup__importFile}>
                    <p className={`text-regular-2 ${styles.inputGroup__importFile__placeholder}`}>{props.inputPlaceHolder}</p>
                </div>
            }
            { props.type === "radio" && props.radioOptions && 
                <div className={styles.inputGroup__radioOptionsList}>
                    { props.radioOptions.map((option: string, index: number) => (
                        <label className={styles.inputGroup__radioOptionsList__wrapper} key={index}  htmlFor={`input-${option}`}>
                            <input type="radio" id={`input-${option}`} name={props.title} defaultChecked={index === 0 ? true : false}/>
                            <span className="text-regular-2">{option}</span>
                        </label>
                    
                    )) }
                </div>            
            }
        </div>
    );
}
 
export default inputField;