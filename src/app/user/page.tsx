//styles
import styles from "@/app/_styles/user_dashboard.module.scss"

//components
import Heading from "../_components/user_dashboard/Heading"
import RightMenu from "../_components/user_dashboard/RightMenu"
import Profile from "../_components/profile/Profile"
import Contact from "../_components/user_dashboard/Contact"
import Message from "../_components/user_dashboard/Message"

//icons
import PhoneIcon from "../_components/icon/PhoneIcon"
import MailIcon from "../_components/icon/MailIcon"

//types
import { contact, mainContact } from "@/types/profile"


const User = () => {
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
        <div className={styles.userDashboard}>
            <div className={styles.userDashboard__mainSection}>
                <Heading/>
                <Profile infoItems={infoItems} mainInfoItem={mainInfoItem} styleDecoration="circle"/>
                <div className={styles.userDashboard__mainSection__contactMessageSection}>
                    <div className={styles.userDashboard__mainSection__contactMessageSection__contactWrapper}>
                        <Contact/>
                    </div>
                    <div className={styles.userDashboard__mainSection__contactMessageSection__messageWrapper}>
                        <Message/>
                    </div>
                </div>
            </div>
            <RightMenu/>
        </div>
    );
}
 
export default User;