import { CalendarPicker } from "../CalendarPicker/CalendarPicker";
import { FormDropdown } from "../FormDropdown/FormDropdown";
import styles from "./Form.module.scss";
import { useState } from "react";

export const Form = ({ bookingInfo }) => {
  const placeObj = Object.keys(bookingInfo).reduce((acc, key) => {
    return { ...acc, [key]: "" };
  }, {});

  const [place, setPlace] = useState(placeObj);
  const [date, setDate] = useState(new Date());
  const [textarea, setTextarea] = useState("");
  const [open, setOpen] = useState("");

  const getDate = (date) => {
    const paymentDate = new Date(date);

    const editDate = {
      year: paymentDate.getFullYear(),
      month:
        paymentDate.getMonth() < 10
          ? "0" + (paymentDate.getMonth() + 1)
          : paymentDate.getMonth() + 1,
      day:
        paymentDate.getDate() < 10
          ? "0" + paymentDate.getDate()
          : paymentDate.getDate(),
    };

    return `${editDate.year}-${editDate.month}-${editDate.day}`;
  };

  const getElement = (el) => {
    setPlace((prevState) => ({ ...prevState, [open]: el }));
    setOpen("");
  };

  const handleItem = (el) => {
    if (open === el) {
      setOpen("");
    } else {
      setOpen(el);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const json = {
      ...place,
      date: `${getDate(date)}T${date.toLocaleTimeString()}`,
      textarea,
    };

    console.log(JSON.stringify(json));
    handleClear();
  };

  const handleClear = () => {
    setPlace(placeObj);
    setDate(new Date());
    setTextarea("");
    setOpen("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.formTitle}>Бронирование переговорной</h1>
      {Object.keys(bookingInfo).map((item, idx) => (
        <div
          className={styles.formSelect}
          key={idx}
          onClick={() => handleItem(item)}
        >
          <FormDropdown
            place={{ key: item, value: place[item] }}
            bookingInfo={bookingInfo[item]}
            getElement={getElement}
            showMenu={open === item}
          />
        </div>
      ))}
      <div>
        <CalendarPicker startDate={date} setStartDate={setDate} />
      </div>
      <textarea
        value={textarea}
        onChange={(e) => setTextarea(e.target.value)}
        placeholder="Введите комментарий:"
      ></textarea>
      <div className={styles.formButtons}>
        <span className={styles.formRule}>- обязательно выбрать!</span>
        <button
          type="submit"
          className={styles.formSubmit}
          disabled={!date | Object.values(place).includes("")}
        >
          Отправить
        </button>
        <button
          type="button"
          className={styles.formClear}
          onClick={handleClear}
        >
          Очистить
        </button>
      </div>
    </form>
  );
};
