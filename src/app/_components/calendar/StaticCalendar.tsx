//styles
import styles from '@/app/_styles/components/calendar.module.scss'

//types
import { mark_day } from '@/types/calendar';

type props = {
  markDays?: mark_day[],
  day: number;    // 1-31
  month: number;  // 0-11 (January is 0, December is 11)
  year: number;   // 4-digit year
};

const StaticCalendar = (props: props) => {
  const currentDate = new Date(props.year, props.month, props.day)

  const daysInMonth = (month: number, year: number) => new Date(year, month, 0).getDate()

  const renderDaysHeader = () => {
    const daysNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return daysNames.map(day => <p key={day} className={`text-regular-2 ${styles.staticCalendar__daysHeader__dayOfWeek}`}>{day}</p>)
  };

  const renderDays = () => {
        const days = []
        const month = currentDate.getMonth()
        const year = currentDate.getFullYear()
        const today = currentDate.getDate()

        // Calculate days from the previous month to fill up to Sunday
        const firstDayOfMonth = new Date(year, month, 1).getDay()
        const daysInPreviousMonth = daysInMonth(month, year)
        for (let i = firstDayOfMonth - 1; i >= 0; i--) {
            days.unshift(<div key={`prev-${daysInPreviousMonth - i}`} className={styles.staticCalendar__daysSection__dayWrapper}><p className={`text-regular-2 ${styles.staticCalendar__daysSection__dayWrapper__day} ${styles["staticCalendar__daysSection__dayWrapper--otherMonth"]}`}>{daysInPreviousMonth - i}</p></div>)
        }

        // Days in current month
        for (let i = 1; i <= daysInMonth(month + 1, year); i++) {
          let className = `text-regular-2 ${styles.staticCalendar__daysSection__dayWrapper__day}`

          if (i === today)
            className += ` ${styles["staticCalendar__daysSection__dayWrapper--today"]}`

          if (props.markDays?.find(item => item.day === i))
            className += ` ${styles.staticCalendar__daysSection__dayWrapper__markDay} ${styles[`staticCalendar__daysSection__dayWrapper__markDay--${props.markDays?.find(item => item.day === i)?.background}`]}`
          
          days.push(<div key={i} className={styles.staticCalendar__daysSection__dayWrapper}><p className={className}>{i}</p></div>)
        }

        // Calculate days from the next month to fill the grid
        const totalSlots = 35; // 5 rows x 7 columns
        while (days.length < totalSlots) {
          const nextDay = days.length + 1 - (firstDayOfMonth + daysInMonth(month + 1, year))
          days.push(<div key={`next-${nextDay}`} className={styles.staticCalendar__daysSection__dayWrapper}><p className={`text-regular-2 ${styles.staticCalendar__daysSection__dayWrapper__day} ${styles["staticCalendar__daysSection__dayWrapper--otherMonth"]}`}>{nextDay}</p></div>)
        }

        return days;
    };

  return (
    <div className={styles.staticCalendar}>
      <div className={styles.staticCalendar__daysHeader}>
        {renderDaysHeader()}
      </div>
      <div className={styles.staticCalendar__daysSection}>
        {renderDays()}
      </div>
    </div>
  );
}

export default StaticCalendar;