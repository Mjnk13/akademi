//styles
import styles from "@/app/_styles/components/profile.module.scss"

//icons
import DotsIcon from "../icon/DotsIcon"
import LocationIcon from "../icon/LocationIcon"

//types
import { contact, mainContact, teacherDetailsInfo } from "@/types/profile"

type props = {
    mainInfoItem: mainContact,
    infoItems: contact[],
    styleDecoration: string,
    teacherDetailsInfo?: teacherDetailsInfo
}

const Profile = (props: props) => {    
    return (
        <div className={styles.profile}>
            <div className={styles.profile__background}>
                <div className={`${styles[`profile__background__${props.styleDecoration}`]} ${styles[`profile__background__${props.styleDecoration}--orange`]}`}></div>
                <div className={`${styles[`profile__background__${props.styleDecoration}`]} ${styles[`profile__background__${props.styleDecoration}--yellow`]}`}></div>
            </div>
            <div className={styles.profile__userInfo}>
                <div className={styles.profile__userInfo__header}>
                    <div className={styles.profile__userInfo__header__avatar}></div>
                    <button className={styles.profile__userInfo__header__optionBtn}><DotsIcon/></button>
                </div>
                <div className={styles.profile__userInfo__body}>
                    { props.mainInfoItem &&
                        <div className={styles.profile__userInfo__body__mainInfo}>
                            <h2 className={styles.profile__userInfo__body__mainInfo__name}>{props.mainInfoItem.name}</h2>
                            <p className={`text-semibold-1 ${styles.profile__userInfo__body__mainInfo__role}`}>{props.mainInfoItem.role}</p>
                            { props.mainInfoItem.location &&
                                <div className={styles.profile__userInfo__body__mainInfo__location}>
                                    <LocationIcon/>
                                    <p className={`text-regular-1 ${styles.profile__userInfo__body__mainInfo__location__text}`}>{props.mainInfoItem.location}</p>
                                </div>
                            }
                        </div> 
                    }
                    <div className={styles.profile__userInfo__body__contact}>
                        { props.infoItems.map((item:contact, index:number) => (
                            <div key={`contact-${index}`} className={styles.profile__userInfo__body__contact__item}>
                                {item.title && <p className={`text-regular-1 ${styles.profile__userInfo__body__contact__item__title}`}>{item.title}</p>}
                                <div className={styles.profile__userInfo__body__contact__item__info}>
                                    <div className={styles.profile__userInfo__body__contact__item__info__icon}>
                                        {item.icon}
                                    </div>
                                    <p className={`text-semibold-1 ${styles.profile__userInfo__body__contact__item__info__description}`}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    { props.teacherDetailsInfo && 
                        <div className={styles.profile__userInfo__body__teacherDetailsInfo}>
                            <div  className={styles.profile__userInfo__body__teacherDetailsInfo__about}>
                                <h4 className={styles.profile__userInfo__body__teacherDetailsInfo__about__title}>About:</h4>
                                <p className={`text-regular-1 ${styles.profile__userInfo__body__teacherDetailsInfo__about__description}`}>{props.teacherDetailsInfo?.about}</p>
                            </div>
                            <div  className={styles.profile__userInfo__body__teacherDetailsInfo__education}>
                                <h4 className={styles.profile__userInfo__body__teacherDetailsInfo__education__title}>Education:</h4>
                                <ul className={styles.profile__userInfo__body__teacherDetailsInfo__education__list}>
                                    { props.teacherDetailsInfo?.education.map((item: {title: string, yearDuration:string}, index) => (
                                        <li key={`teacher-education-${index}`} className={styles.profile__userInfo__body__teacherDetailsInfo__education__list__item}>
                                            <p className={`text-semibold-1 ${styles.profile__userInfo__body__teacherDetailsInfo__education__list__item__title}`}>{item.title}</p>
                                            <p className={`text-regular-1 ${styles.profile__userInfo__body__teacherDetailsInfo__education__list__item__yearDuration}`}>{item.yearDuration}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div  className={styles.profile__userInfo__body__teacherDetailsInfo__expertise}>
                                <h4 className={styles.profile__userInfo__body__teacherDetailsInfo__expertise__title}>Expertise:</h4>
                                <p className={`text-regular-1 ${styles.profile__userInfo__body__teacherDetailsInfo__expertise__info}`}>{ props.teacherDetailsInfo?.expertise.map((item:string, index:number) => index === 0 ? item : ", " + item) }</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Profile;