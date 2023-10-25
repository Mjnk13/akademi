//styles
import styles from "@/app/_styles/foods.module.scss"

//components
import Heading from "@/app/_components/foods/details/Heading"
import StudentComment from "@/app/_components/foods/details/StudentComment"

//types
import { comment } from "@/types/comment"
import { food } from "@/types/food"

//raw_data
import { Foods } from "@/raw_data/food"

//icons
import DotsIcon from "@/app/_components/icon/DotsIcon"
import StarIcon from "@/app/_components/icon/StarIcon"
import BarChartIcon from "@/app/_components/icon/BarChartIcon"
import ArrowIcon from "@/app/_components/icon/ArrowIcon"
import CircleBarIcon from "@/app/_components/icon/CircleBarIcon"

const foodDetails = ({ params }: {params: {id: number}}) => {
    const food = Foods.find((food) => food.id == params.id) as food

    const studentComment: comment[] = [
        {
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc magna ullamcorper elit, vitae luctus nisl nunc eu nisl.",
            date: "5 days ago",
            name: "Samantha W.",
        },
        {
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc magna ullamcorper elit, vitae luctus nisl nunc eu nisl.",
            date: "5 days ago",
            name: "Karen Hope",
        },
        {
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc magna ullamcorper elit, vitae luctus nisl nunc eu nisl.",
            date: "5 days ago",
            name: "Tony Soap",
        },
    ]

    const ingredients: string[] = [
        "2 tablespoons butter, softened, divided",
        "1 teaspoon minced fresh parsley",
        "1/2 teaspoon minced garlic",
        "1/4 teaspoon reduced-sodium soy sauce",
        "1 beef flat iron steak or boneless top sirloin steak (3/4 pound)",
        "1/8 teaspoon salt",
        "1/8 teaspoon pepper"
    ]

    const nutrition: string[] = [
        "Calories: 217",
        "Water: 61%",
        "Protein: 26.1 grams",
        "Carbs: 0 grams",
        "Sugar: 0 grams",
        "Fiber: 0 grams",
        "Fat: 11.8 grams"
    ]

    return (
        <div className={styles.foodDetails}>
            <Heading/>
            <div className={styles.foodDetails__mainSection}>
                <div className={styles.foodDetails__mainSection__infoSection}>
                    <div className={styles.foodDetails__mainSection__infoSection__wrapper}>
                        <div className={styles.foodDetails__mainSection__infoSection__wrapper__header}>
                            <div className={styles.foodDetails__mainSection__infoSection__wrapper__header__mainInfo}>
                                <span className={styles.foodDetails__mainSection__infoSection__wrapper__header__mainInfo__image}/>
                                <div className={styles.foodDetails__mainSection__infoSection__wrapper__header__mainInfo__text}>
                                    <h4 className={styles.foodDetails__mainSection__infoSection__wrapper__header__mainInfo__text__name}>{food.name}</h4>
                                    <p className={`text-regular-2 ${styles.foodDetails__mainSection__infoSection__wrapper__header__mainInfo__text__category}`}>{food.type}</p>
                                    <p className={`text-regular-2 ${styles.foodDetails__mainSection__infoSection__wrapper__header__mainInfo__text__description}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <button className={styles.foodDetails__mainSection__infoSection__wrapper__header__moreOptionBtn}><DotsIcon/></button>
                        </div>
                        <div className={styles.foodDetails__mainSection__infoSection__wrapper__statistics}>
                            <div className={styles.foodDetails__mainSection__infoSection__wrapper__statistics__rating}>
                                <p className={`text-regular-1 ${styles.foodDetails__mainSection__infoSection__wrapper__statistics__rating__title}`}>Rating</p>
                                <h4 className={styles.foodDetails__mainSection__infoSection__wrapper__statistics__rating__number}><StarIcon/> {food.rate}</h4>
                            </div>
                            <div className={styles.foodDetails__mainSection__infoSection__wrapper__statistics__totalOrder}>
                                <BarChartIcon/>
                                <div className={styles.foodDetails__mainSection__infoSection__wrapper__statistics__totalOrder__info}>
                                    <h4 className={styles.foodDetails__mainSection__infoSection__wrapper__statistics__totalOrder__info__number}>{food.totalOrder}</h4>
                                    <p className={`text-regular-1 ${styles.foodDetails__mainSection__infoSection__wrapper__statistics__totalOrder__info__title}`}>Total Order</p>
                                </div>
                            </div>
                            <div className={styles.foodDetails__mainSection__infoSection__wrapper__statistics__interest}>
                                <ArrowIcon/>
                                <div className={styles.foodDetails__mainSection__infoSection__wrapper__statistics__interest__info}>
                                    <h4 className={styles.foodDetails__mainSection__infoSection__wrapper__statistics__interest__info__number}>{food.interest}%</h4>
                                    <p className={`text-regular-1 ${styles.foodDetails__mainSection__infoSection__wrapper__statistics__interest__info__title}`}>Interest</p>
                                </div>
                            </div>
                            <div className={styles.foodDetails__mainSection__infoSection__wrapper__statistics__circleBar}>
                                <CircleBarIcon/>
                                <p className={`text-semibold-2 ${styles.foodDetails__mainSection__infoSection__wrapper__statistics__circleBar__percentage}`}>50%</p>
                            </div>
                        </div>
                        <div className={styles.foodDetails__mainSection__infoSection__wrapper__foodElements}>
                            <div className={styles.foodDetails__mainSection__infoSection__wrapper__foodElements__ingredients}>
                                <div className={styles.foodDetails__mainSection__infoSection__wrapper__foodElements__ingredients__wrapper}>
                                    <h4 className={styles.foodDetails__mainSection__infoSection__wrapper__foodElements__ingredients__wrapper__title}>Ingredients:</h4>
                                    <ul className={styles.foodDetails__mainSection__infoSection__wrapper__foodElements__ingredients__wrapper__list}>
                                        { ingredients.map((ingredient:string, index:number) => (
                                            <li key={`ingredient-${index}`} className={`text-regular-2 ${styles.foodDetails__mainSection__infoSection__wrapper__foodElements__ingredients__wrapper__list__item}`}>{ingredient}</li>
                                        )) }
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.foodDetails__mainSection__infoSection__wrapper__foodElements__nutrition}>
                                <div className={styles.foodDetails__mainSection__infoSection__wrapper__foodElements__nutrition__wrapper}>
                                    <h4 className={styles.foodDetails__mainSection__infoSection__wrapper__foodElements__nutrition__wrapper__title}>Nutrition:</h4>
                                    <ul className={styles.foodDetails__mainSection__infoSection__wrapper__foodElements__nutrition__wrapper__list}>
                                        { nutrition.map((nutrition:string, index:number) => (
                                            <li key={`nutrition-${index}`} className={`text-regular-2 ${styles.foodDetails__mainSection__infoSection__wrapper__foodElements__nutrition__wrapper__list__item}`}>{nutrition}</li>
                                        )) }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.foodDetails__mainSection__commentSection}>
                    <StudentComment comments={studentComment}/>
                </div>
            </div>
        </div>
    )
}

export default foodDetails