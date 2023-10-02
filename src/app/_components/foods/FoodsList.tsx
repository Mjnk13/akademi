'use client'

//react
import { useState } from "react";

//styles
import styles from "@/app/_styles/foods.module.scss"
import { food } from "@/types/food";

//icons
import BarChartIcon from "../icon/BarChartIcon";
import ArrowIcon from "../icon/ArrowIcon";
import StarIcon from "../icon/StarIcon";
import DotsIcon from "../icon/DotsIcon";
import Paginate from "../paginate/Paginate";

const FoodsList = () => {
    const [currentPage, setCurrentPage] = useState(0);

    function handlePageClick(event: {selected: number}) {
        setCurrentPage(event.selected)
    }

    const foods:food[] = [
        {
            type: "lunch",
            name: "Beef Steak with Fried Potato",
            rate: 4.9,
            totalOrder: 1456,
            interest: 26
        },
        {
            type: "breakfast",
            name: "Pancake with Honey",
            rate: 4.7,
            totalOrder: 1456,
            interest: 26
        },
        {
            type: "lunch",
            name: "Japanese Beef Ramen",
            rate: 4.8,
            totalOrder: 1456,
            interest: 26
        },
        {
            type: "lunch",
            name: "Mixed Salad",
            rate: 4.2,
            totalOrder: 1456,
            interest: 26
        },
        {
            type: "snack",
            name: "Beef Meatball with Vegetable",
            rate: 4.5,
            totalOrder: 1456,
            interest: 26
        }
    ]

    const categories:string[] = [
        "All Menus",
        "Breakfast",
        "Lunch",
        "Snack"
    ]

    return (
        <div className={styles.foods__list}>
            <div className={styles.foods__list__header}>
                <h3 className={styles.foods__list__header__title}>Food Menu</h3>
                <div className={styles.foods__list__header__categories}>
                    { categories.map((category:string, index:number) => (
                        <p key={`category-${index}`} className={`text-semibold-2 ${styles.foods__list__header__categories__category} ${index === 0 ? styles["foods__list__header__categories__category--active"] : "" }`}>{category}</p>
                    )) }
                    <div className={styles.foods__list__header__categories__divider}></div>
                </div>
            </div>
            <div className={styles.foods__list__body}>
                <table className={styles.foods__list__body__table}>
                    <tbody>
                        {foods.map((food) => (
                            <tr key={`food-${food.name}`} className={styles.foods__list__body__table__item}>
                                <td><div className={styles.foods__list__body__table__item__image}></div></td>
                                <td>
                                    <div className={styles.foods__list__body__table__item__typeName}>
                                        <p className={`text-regular-2 ${styles.foods__list__body__table__item__typeName__type}`}>{food.type}</p>
                                        <h4 className={styles.foods__list__body__table__item__typeName__name}>{food.name}</h4>
                                    </div>
                                </td>
                                <td><h4 className={styles.foods__list__body__table__item__rate}><StarIcon/> {food.rate}</h4></td>
                                <td>
                                    <div className={styles.foods__list__body__table__item__totalOrderWrapper}>
                                        <BarChartIcon/>
                                        <div className={styles.foods__list__body__table__item__totalOrderWrapper__info}>
                                            <h4 className={styles.foods__list__body__table__item__totalOrderWrapper__info__number}>{food.totalOrder}</h4>
                                            <p className={`text-regular-1 ${styles.foods__list__body__table__item__totalOrderWrapper__info__text}`}>Total Order</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.foods__list__body__table__item__interestWrapper}>
                                        <ArrowIcon/>
                                        <div className={styles.foods__list__body__table__item__interestWrapper__info}>
                                            <h4 className={styles.foods__list__body__table__item__interestWrapper__info__number}>{food.interest}%</h4>
                                            <p className={`text-regular-1 ${styles.foods__list__body__table__item__interestWrapper__info__text}`}>Interest</p>
                                        </div>
                                    </div>
                                </td>
                                <td><DotsIcon/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={styles.foods__list__body__paginate}>
                    <Paginate handlePageClick={handlePageClick} pageCount={3} currentPage={currentPage}/>
                </div>
            </div>
        </div>
    );
}
 
export default FoodsList;