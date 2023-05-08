import style from "./FormDropdown.module.scss";

export const FormDropdown = ({ place, bookingInfo, getElement, showMenu }) => {
  const handleChooseElement = (e, el) => {
    e.stopPropagation();
    getElement(el);
  };

  return (
    <>
      <span className={style.formText}>
        {place?.value === "" ? `Choose a ${place?.key}` : place.value}
      </span>
      {showMenu && (
        <ul className={style.dropdownMenu}>
          {bookingInfo.map((item, idx) => (
            <li
              className={style.dropdownMenuItem}
              key={idx}
              onClick={(e) => handleChooseElement(e, item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
