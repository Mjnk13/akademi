
//styles
import styles from "@/app/_styles/teachers.module.scss"

//raw data
import { Teachers } from "@/raw_data/teacher"

//types
import { teacher } from "@/types/teacher"
import { schedule_details } from "@/types/scheduledetails"
import { contact, mainContact, teacherDetailsInfo } from "@/types/profile"

//components
import Profile from "@/app/_components/profile/Profile"
import Heading from "@/app/_components/teachers/details/Heading"
import ScheduleDetails from "@/app/_components/schedule_details/ScheduleDetails"

//icons
import PhoneIcon from "@/app/_components/icon/PhoneIcon"
import MailIcon from "@/app/_components/icon/MailIcon"
import LocationIcon from "@/app/_components/icon/LocationIcon"

const TeacherDetails = ({ params }: {params: {id: number}}) => {
    const teacher = Teachers.find(teacher => teacher.id == params.id) as teacher
    
    const scheduleDetails:schedule_details[] = [
        {
            title: "World History",
            subTitle: "Class VII-B",
            date: "March 20, 2021",
            time: "09.00 - 10.00 AM",
            color: "purple"
        },
        {
            title: "Ancient History",
            subTitle: "Class VII-A",
            date: "March 20, 2021",
            time: "09.00 - 10.00 AM",
            color: "orange"
        },
        {
            title: "Culture",
            subTitle: "Class VIII-A",
            date: "March 20, 2021",
            time: "09.00 - 10.00 AM",
            color: "yellow"
        },
        {
            title: "World History",
            subTitle: "Class VII-C",
            date: "March 20, 2021",
            time: "09.00 - 10.00 AM",
            color: "text"
        }
    ]

    const mainInfoItem:mainContact = {
        name: teacher.name,
        role: teacher.major,
    }

    const infoItems:contact[] = [
        {
            icon: <LocationIcon/>,
            description: "Jakarta, Indonesia"
        },
        {
            icon: <PhoneIcon/>,
            description: "+12 345 6789 0"
        },
        {
            icon: <MailIcon/>,
            description: "teacher@mail.com"
        },
    ]

    const teacherDetailsInfo:teacherDetailsInfo = {
        about: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl.",
        education: [
            {
                title: "Bachelor, University of Akademi",
                yearDuration: "2013 - 2016"
            },
            {
                title: "Master, University of Akademi",
                yearDuration: "2017 - 2020"
            }
        ],
        expertise: [ "lorem 1", "lorem 2", "lorem 3", "lorem 4", "lorem 5" ]
    }

    return (
        <div className={styles.teacherDetails}>
            <Heading/>
            <div className={styles.teacherDetails__mainSection}>
                <div className={styles.teacherDetails__mainSection__profileSection}>
                    <Profile styleDecoration="hollowCircle" infoItems={infoItems} mainInfoItem={mainInfoItem} teacherDetailsInfo={teacherDetailsInfo}/>
                </div>
                <div className={styles.teacherDetails__mainSection__scheduleDetailsSection}>
                    <ScheduleDetails scheduleDetails={scheduleDetails} isShowAvatar={false}/>
                </div>
            </div>
        </div>
    );
}
 
export default TeacherDetails;