//styles
import styles from "@/app/_styles/foods.module.scss"

//components
import Heading from "../_components/foods/Heading"
import FoodsList from "../_components/foods/FoodsList";

const Food = () => {
    return (
        <div className={styles.foods}>
            <Heading/>
            <FoodsList/>
        </div>
    );
}
 
export default Food;