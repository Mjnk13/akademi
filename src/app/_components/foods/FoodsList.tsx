'use client'

//react
import { useState } from "react";
import Link from "next/link";

//styles
import styles from "@/app/_styles/foods.module.scss"

//raw_data
import { Foods } from "@/raw_data/food"

//types
import { food } from "@/types/food"

//icons
import BarChartIcon from "../icon/BarChartIcon"
import ArrowIcon from "../icon/ArrowIcon"
import StarIcon from "../icon/StarIcon"
import DotsIcon from "../icon/DotsIcon"
import Paginate from "../paginate/Paginate"
import CircleBarIcon from "../icon/CircleBarIcon"

const FoodsList = () => {
    const [currentPage, setCurrentPage] = useState(0);

    function handlePageClick(event: {selected: number}) {
        setCurrentPage(event.selected)
    }

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
                        {Foods.map((food: food) => (
                            <tr key={`food-${food.name}`} className={styles.foods__list__body__table__item}>
                                <td>
                                    <Link href={`food/${food.id}`} className={styles.foods__list__body__table__item__link}>
                                        <div className={styles.foods__list__body__table__item__link__image}/>
                                        <div className={styles.foods__list__body__table__item__link__typeName}>
                                            <p className={`text-regular-2 ${styles.foods__list__body__table__item__link__typeName__type}`}>{food.type}</p>
                                            <h4 className={styles.foods__list__body__table__item__link__typeName__name}>{food.name}</h4>
                                        </div>
                                    </Link>
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
                                <td>
                                    <div className={styles.foods__list__body__table__item__circleBar}>
                                        <CircleBarIcon/>
                                        <p className={`text-semibold-2 ${styles.foods__list__body__table__item__circleBar__percentage}`}>50%</p>
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