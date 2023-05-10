import styles from "./CalendarPicker.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const CalendarPicker = ({ startDate, setStartDate }) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
      className={styles.calendar}
      placeholderText="Дата не выбрана!"
    />
  );
};
