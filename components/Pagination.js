import css from "./style/pagination.module.css";

const Pagination = () => {
  return (
    <>
      <div className={css.pagination}>
        <div className={css.circle__border}>
          <button className={css.pagination__number} disabled>
            {"<"}
          </button>
        </div>
        {Array(10)
          .fill()
          .map((val, indx) => {
            val = indx + 1;
            return (
              <div
                className={val === 1 ? css.active : css.circle__border}
                key={indx}
              >
                <button className={css.pagination__number}>{val}</button>
              </div>
            );
          })}
        <div className={css.circle__border}>
          <button className={css.pagination__number}>{">"}</button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
