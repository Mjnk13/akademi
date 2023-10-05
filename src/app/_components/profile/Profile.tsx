//styles
import styles from "@/app/_styles/components/profile.module.scss"

//icons
import DotsIcon from "../icon/DotsIcon";
import PhoneIcon from "../icon/PhoneIcon";
import MailIcon from "../icon/MailIcon";
import LocationIcon from "../icon/LocationIcon";

//types
import { contact, mainContact } from "@/types/profile";

const Profile = () => {
    const mainInfoItem:mainContact = {
        name: "Nhat Minh",
        role: "Admin",
        location: "Jakarta, Indonesia"
    }

    const infoItems:contact[] = [
        {
            icon: <PhoneIcon/>,
            title: "Phone",
            description: "+12 345 6789 0"
        },
        {
            icon: <MailIcon/>,
            title: "Email",
            description: "jordan@mail.com"
        },
    ]
    
    return (
        <div className={styles.profile}>
            <div className={styles.profile__background}>
                <div className={`${styles.profile__background__circle} ${styles["profile__background__circle--orange"]}`}></div>
                <div className={`${styles.profile__background__circle} ${styles["profile__background__circle--yellow"]}`}></div>
            </div>
            <div className={styles.profile__userInfo}>
                <div className={styles.profile__userInfo__header}>
                    <div className={styles.profile__userInfo__header__avatar}></div>
                    <button className={styles.profile__userInfo__header__optionBtn}><DotsIcon/></button>
                </div>
                <div className={styles.profile__userInfo__body}>
                    { mainInfoItem &&
                        <div className={styles.profile__userInfo__body__mainInfo}>
                            <h2 className={styles.profile__userInfo__body__mainInfo__name}>{mainInfoItem.name}</h2>
                            <p className={`text-semibold-1 ${styles.profile__userInfo__body__mainInfo__role}`}>{mainInfoItem.role}</p>
                            <div className={styles.profile__userInfo__body__mainInfo__location}>
                                <LocationIcon/>
                                <p className={`text-regular-1 ${styles.profile__userInfo__body__mainInfo__location__text}`}>{mainInfoItem.location}</p>
                            </div>
                        </div> 
                    }
                    <div className={styles.profile__userInfo__body__contact}>
                        { infoItems.map((item:contact, index:number) => (
                            <div key={`contact-${index}`} className={styles.profile__userInfo__body__contact__item}>
                                <p className={`text-regular-1 ${styles.profile__userInfo__body__contact__item__title}`}>{item.title}</p>
                                <div className={styles.profile__userInfo__body__contact__item__info}>
                                    <div className={styles.profile__userInfo__body__contact__item__info__icon}>
                                        {item.icon}
                                    </div>
                                    <p className={`text-semibold-1 ${styles.profile__userInfo__body__contact__item__info__description}`}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Profile;