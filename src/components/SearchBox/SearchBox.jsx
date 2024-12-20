import s from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={s.wrapperSearchBox}>
      <form className={s.formSearchBox}>
        <label className={s.labelSearchBox}>Find contacts by name</label>
        <input className={s.inputSearchBox} type="text" />
      </form>
    </div>
  );
};

export default SearchBox;
