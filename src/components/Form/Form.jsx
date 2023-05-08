import { FormDropdown } from "../FormDropdown/FormDropdown";
import style from "./Form.module.scss";
import { useState } from "react";

export const Form = ({ bookingInfo }) => {
  const placeObj = Object.keys(bookingInfo).reduce((acc, key) => {
    return { ...acc, [key]: "" };
  }, {});

  const [place, setPlace] = useState(placeObj);
  const [date, setDate] = useState("");
  const [textarea, setTextarea] = useState("");
  const [open, setOpen] = useState("");

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
      date,
      textarea,
    };

    console.log(JSON.stringify(json));
    handleClear();
  };

  const handleClear = () => {
    setPlace(placeObj);
    setDate("");
    setTextarea("");
    setOpen("");
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      {Object.keys(bookingInfo).map((item, idx) => (
        <div
          className={style.formSelect}
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
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <textarea
        value={textarea}
        onChange={(e) => setTextarea(e.target.value)}
        placeholder="Введите комментарий:"
      ></textarea>
      <div className={style.formButtons}>
        <button
          type="submit"
          className={style.formSubmit}
          disabled={!date | !textarea | Object.values(place).includes("")}
        >
          Отправить
        </button>
        <button type="button" className={style.formClear} onClick={handleClear}>
          Очистить
        </button>
      </div>
    </form>
  );
};
