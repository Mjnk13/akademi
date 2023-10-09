'use client'

//reacts
import { useState, useEffect } from 'react'

//styles
import styles from '@/app/_styles/components/calendar.module.scss'

type CalendarProps = {
  markDays?: number[]
};

const Calendar = (props: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    setCurrentDate(new Date())
  }, []);

  const daysInMonth = (month: number, year: number) => new Date(year, month, 0).getDate()

  const renderDaysHeader = () => {
    const daysNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return daysNames.map(day => <div key={day} className={styles.calendar__dayName}>{day}</div>)
  };

  const renderDays = () => {
        const days = [];
        const month = currentDate.getMonth()
        const year = currentDate.getFullYear()
        const today = new Date().getDate()

        // Calculate days from the previous month to fill up to Sunday
        const firstDayOfMonth = new Date(year, month, 1).getDay()
        const daysInPreviousMonth = daysInMonth(month, year)
        for (let i = firstDayOfMonth - 1; i >= 0; i--) {
            days.unshift(<div key={`prev-${daysInPreviousMonth - i}`} className={`${styles.calendar__day} ${styles["calendar--otherMonth"]}`}>{daysInPreviousMonth - i}</div>)
        }

        // Days in current month
        for (let i = 1; i <= daysInMonth(month + 1, year); i++) {
        let className = `${styles.calendar__day}`;
        if (i === today) className += ` ${styles["calendar--today"]}`
        if (props.markDays?.includes(i)) 
          className += ` ${styles["calendar--markDay"]}`
          days.push(<div key={i} className={className}>{i}</div>)
        }

        // Calculate days from the next month to fill the grid
        const totalSlots = 35; // 5 rows x 7 columns
        while (days.length < totalSlots) {
          const nextDay = days.length + 1 - (firstDayOfMonth + daysInMonth(month + 1, year))
          days.push(<div key={`next-${nextDay}`} className={`${styles.calendar__day} ${styles["calendar--otherMonth"]}`}>{nextDay}</div>)
        }

        return days;
    };

  return (
    <div className={styles.calendar}>
      {renderDaysHeader()}
      {renderDays()}
    </div>
  );
}

export default Calendar;