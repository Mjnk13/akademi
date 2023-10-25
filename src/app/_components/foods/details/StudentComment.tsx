//styles
import styles from "@/app/_styles/foods.module.scss"

//types
import { comment } from "@/types/comment"

//icons
import QuoteIcon from "../../icon/QuoteIcon"

type props = {
    comments: comment[]
}

const StudentComment = (props: props) => {
    return (
        <div className={styles.foodDetails__mainSection__commentSection__wrapper}>
            <h4 className={styles.foodDetails__mainSection__commentSection__wrapper__title}>Student Comments</h4>
            <div className={styles.foodDetails__mainSection__commentSection__wrapper__list}>
                { props.comments.map((comment: comment, index: number) => (
                    <div className={styles.foodDetails__mainSection__commentSection__wrapper__list__item}>
                        <QuoteIcon/>
                        <p className={`text-regular-2 ${styles.foodDetails__mainSection__commentSection__wrapper__list__item__comment}`}>{comment.comment}</p>
                        <div className={styles.foodDetails__mainSection__commentSection__wrapper__list__item__userCommentInfo}>
                            <div className={styles.foodDetails__mainSection__commentSection__wrapper__list__item__userCommentInfo__avatar}/>
                            <div className={styles.foodDetails__mainSection__commentSection__wrapper__list__item__userCommentInfo__textWrapper}>
                                <p className={`text-semibold-1 ${styles.foodDetails__mainSection__commentSection__wrapper__list__item__userCommentInfo__textWrapper__name}`}>{comment.name}</p>
                                <p className={`text-regular-2 ${styles.foodDetails__mainSection__commentSection__wrapper__list__item__userCommentInfo__textWrapper__date}`}>{comment.date}</p>
                            </div>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
}
 
export default StudentComment;