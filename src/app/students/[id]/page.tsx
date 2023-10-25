//styles
import styles from "@/app/_styles/students.module.scss"

//types
import { schedule_details } from "@/types/scheduledetails"
import { contact, mainContact } from "@/types/profile"
import { shool_expense } from "@/types/schoolexpense"
import { student } from "@/types/student"

//components
import Heading from "@/app/_components/students/details/Heading"
import Profile from "@/app/_components/profile/Profile"
import ScheduleDetails from "@/app/_components/schedule_details/ScheduleDetails"
import SchoolExpense from "@/app/_components/finance/subComponent/SchoolExpense"

//raw data
import { Students } from "@/raw_data/student"

//icons
import LocationIcon from "@/app/_components/icon/LocationIcon"
import PhoneIcon from "@/app/_components/icon/PhoneIcon"
import MailIcon from "@/app/_components/icon/MailIcon"
import UserIcon from "@/app/_components/icon/UserIcon"

const StudentDetails = ({ params }: {params: {id: number}}) => {
    const student = Students.find(teacher => teacher.id == params.id) as student

    const mainInfoItem:mainContact = {
        name: student.name,
        role: "Student",
    }

    const infoItems:contact[] = [
        {
            icon: <UserIcon/>,
            title: "Parents",
            description: student.parentName
        },
        {
            icon: <LocationIcon/>,
            title: "Address",
            description: "Jakarta, Indonesia"
        },
        {
            icon: <PhoneIcon/>,
            title: "Phone",
            description: "+12 345 6789 0"
        },
        {
            icon: <MailIcon/>,
            title: "Email",
            description: "student@mail.com"
        },
    ]

    const tableData:shool_expense[] = [
        {
            id: 123456789,
            date_time: '2 March 2021, 13:45 PM',
            amount: 50036,
            status: "completed",
        },
        {
            id: 123456789,
            date_time: '2 March 2021, 13:45 PM',
            amount: 50036,
            status: "pending",
        },
        {
            id: 123456789,
            date_time: '2 March 2021, 13:45 PM',
            amount: 50036,
            status: "cancelled",
        }
    ]

    const scheduleDetails:schedule_details[] = [
        {
            title: "Basic Algorithm",
            subTitle: "Algorithm",
            date: "March 20, 2021",
            time: "09.00 - 10.00 AM",
            color: "purple"
        },
        {
            title: "Basic Art",
            subTitle: "Art",
            date: "March 20, 2021",
            time: "09.00 - 10.00 AM",
            color: "orange"
        },
        {
            title: "HTML & CSS Class",
            subTitle: "Programming",
            date: "March 20, 2021",
            time: "09.00 - 10.00 AM",
            color: "yellow"
        },
        {
            title: "Simple Past Tense",
            subTitle: "English",
            date: "March 20, 2021",
            time: "09.00 - 10.00 AM",
            color: "text"
        }
    ]
    return (
        <div className={styles.studentDetails}>
            <Heading/>
            <div className={styles.studentDetails__mainSection}>
                <div className={styles.studentDetails__mainSection__profileSection}>
                    <Profile styleDecoration="rectangle" infoItems={infoItems} mainInfoItem={mainInfoItem}/>
                    <div className={styles.studentDetails__mainSection__profileSection__margin}/>
                    <SchoolExpense tableData={tableData} isDateTimeColumnSeparate={true} title="Payment History"/>
                </div>
                <div className={styles.studentDetails__mainSection__scheduleDetailsSection}>
                    <ScheduleDetails scheduleDetails={scheduleDetails} isShowAvatar={true}/>
                </div>
            </div>
        </div>
    );
}

export default StudentDetails