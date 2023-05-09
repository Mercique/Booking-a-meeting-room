import styles from "./FormDropdown.module.scss";

export const FormDropdown = ({ place, bookingInfo, getElement, showMenu }) => {
  const handleChooseElement = (e, el) => {
    e.stopPropagation();
    getElement(el);
  };

  return (
    <>
      <span className={styles.formLabel}>{`Choose a ${place?.key}:`}</span>
      <span className={styles.formInput}>
        {place?.value === "" ? `---` : place?.value}
      </span>
      {showMenu && (
        <ul className={styles.dropdownMenu}>
          {bookingInfo.map((item, idx) => (
            <li
              className={styles.dropdownMenuItem}
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
