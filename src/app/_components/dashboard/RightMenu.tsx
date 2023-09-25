//sub components
import UserMenu from "../menu/UserMenu"
import RecentStudentItem from "./subcomponent/RecentStudentItem"
import MessagesItem from "./subcomponent/MessagesItem"
import CurrentFoodsMenuItem from "./subcomponent/CurrentFoodsMenuItem"

//styles
import styles from "@/app/_styles/dashboard.module.scss"
import variables from "@/app/_styles/utils/variables.module.scss"

//types
import { recent_student } from "@/types/recentstudent"
import { message } from "@/types/message"
import { current_food } from "@/types/currentfood"

const RightMenu = () => {
    const recentStudent:recent_student[] = [
        {
            name: "Samantha William",
            class: "VII A",
            isNotify: false
        },
        {
            name: "Tony Soap",
            class: "VII A",
            isNotify: true
        },
        {
            name: "Karen Hope",
            class: "VII A",
            isNotify: false
        },
        {
            name: "Jordan Nico",
            class: "VII B",
            isNotify: false
        },
        {
            name: "Nadila Adja",
            class: "VII B",
            isNotify: false
        },
    ]

    const messages:message[] = [
        {
            name: "Samantha William",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deserunt aperiam soluta cum nobis quas quidem perferendis magnam? Labore laudantium dolorem velit quia doloremque delectus in harum temporibus aut maxime.",
            time: "12:45 PM"
        },
        {
            name: "Tony Soap",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos modi culpa exercitationem assumenda distinctio animi ut expedita, in blanditiis, numquam saepe asperiores, natus harum totam rerum. Dolor ab sit culpa.",
            time: "12:45 PM"
        },
        {
            name: "Jordan Nico",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, sed eveniet soluta, autem ratione dolor iusto repellendus veniam nobis, quibusdam debitis impedit. Minus ea iste possimus quae amet, incidunt quia.",
            time: "12:45 PM"
        },
        {
            name: "Nadila Adja",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut tempora earum adipisci dolore eum, illo tempore hic excepturi officia suscipit. Quibusdam sapiente veritatis debitis ducimus quasi voluptates ad hic.",
            time: "12:45 PM"
        }
    ]

    const currentFoods:current_food[] = [
        {
            title: "Beef Steak with Fried Potato",
            body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem hic obcaecati repellat laudantium nemo aliquam, iusto alias ipsum, voluptatibus, quod exercitationem eveniet asperiores adipisci odio dolorum fuga illo? Aliquid, eum."
        },
        {
            title: "Pancake with Honey",
            body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt alias enim eveniet sapiente eum magnam dolorum recusandae voluptatibus fugit! Explicabo tempora debitis dolores deleniti illum cumque maiores esse, iusto id.",
        },
        {
            title: "Japanese Beef Ramen",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi omnis tempore enim accusamus? Id, omnis alias deleniti maxime blanditiis optio esse! Quasi nostrum, ex architecto expedita fuga accusamus. Fugiat, corrupti!",
        }
    ]

    return (
        <div className={styles.dashboard__rightMenu}>
            <UserMenu/>

            {/* recent student start */}
            <div className={styles.dashboard__rightMenu__recentStudents}>
                <div className={styles.dashboard__rightMenu__recentStudents__heading}>
                    <div className={styles.dashboard__rightMenu__recentStudents__heading__info}>
                        <h4>Recent Students</h4>
                        <p className="text-regular-2" style={{color: variables.colorGrey3}}>You have <span className="text-semibold-2">456</span> students</p>
                    </div>
                    <button className={styles.dashboard__rightMenu__recentStudents__heading__addBtn}>+</button>
                </div>

                <div className={styles.dashboard__rightMenu__recentStudents__list}>
                    { recentStudent.map((student:recent_student, index:number) => (
                        <RecentStudentItem key={`recent-student-${index}`} name={student.name} class={student.class} isNotify={student.isNotify} />
                    )) }
                </div>

                <button className={styles.dashboard__rightMenu__recentStudents__viewMoreBtn}>View More</button>
            </div>
            {/* recent student end */}
            
            {/* message start */}
            <div className={styles.dashboard__rightMenu__messages}>
                <h4>Messages</h4>
                <div className={styles.dashboard__rightMenu__messages__list}>
                    {messages.map((message:message, index:number) => (
                        <MessagesItem key={`message-${index}`} name={message.name} text={message.text} time={message.time} />
                    ))}
                </div>
                <button className={styles.dashboard__rightMenu__messages__viewMoreBtn}>View More</button>
            </div>
            {/* message end */}

            {/* current foods menu start */}
            <div className={styles.dashboard__rightMenu__currentFoodsMenu}>
                <h4>Current Foods Menu</h4>
                <div className={styles.dashboard__rightMenu__currentFoodsMenu__list}>
                    { currentFoods.map((food:current_food, index:number) => (
                        <CurrentFoodsMenuItem title={food.title} body={food.body} />
                    )) }
                </div>
                <button className={styles.dashboard__rightMenu__currentFoodsMenu__viewMoreBtn}>View More</button>
            </div>
            {/* current foods menu end */}
        </div>
    );
}
 
export default RightMenu;