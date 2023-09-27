//style
import styles from "@/app/_styles/students.module.scss"
import variables from "@/app/_styles/utils/variables.module.scss"

//types
import { student } from "@/types/student";

const Table = () => {
    const students:student[] = [
        {
            name: "Samanta William",
            parentName: "Mana William",
            grade: "VII A"
        },
        {
            name: "Tony Soap",
            parentName: "James Soap",
            grade: "VII B"
        },
        {
            name: "Karen Hope",
            parentName: "Justin Hope",
            grade: "VII C"
        },
        {
            name: "Jordan Nico",
            parentName: "Amanda Nico",
            grade: "VII B"
        },
        {
            name: "Nadila Adja",
            parentName: "Jack Adja",
            grade: "VII A"
        },
        {
            name: "Johnny Ahmad",
            parentName: "Danny Ahmad",
            grade: "VII B"
        }
    ]

    return (
        <div className={styles.students__table}>
            <table>
                <thead>
                    <tr style={{color: variables.colorText}}>
                        <th><p className="text-semibold-2">Name</p></th>
                        <th><p className="text-semibold-2">ID</p></th>
                        <th><p className="text-semibold-2">Date</p></th>
                        <th><p className="text-semibold-2">Parent Name</p></th>
                        <th><p className="text-semibold-2">City</p></th>
                        <th><p className="text-semibold-2">Contact</p></th>
                        <th><p className="text-semibold-2">Grade</p></th>
                    </tr>
                </thead>
                <tbody>
                    { students.map((student:student) => (
                        <tr key={`student-${student.name}`}>
                            <td>{student.name}</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    );
}
 
export default Table;