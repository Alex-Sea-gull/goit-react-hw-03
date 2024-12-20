import s from "./ContactForm.module.css";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
    // console.log(event.target.elements.username.value);

    event.target.reset();
  };
  return (
    <div className={s.wrapperContactForm}>
      <form onSubmit={handleSubmit} className={s.formContactForm}>
        <label className={s.labelContactForm}>
          <span>Name</span>
          <input className={s.inputContactForm} type="text" name="username" />
        </label>

        <label className={s.labelContactForm}>
          <span>Number</span>
          <input className={s.inputContactForm} type="text" name="usernumber" />
        </label>
        <button className={s.buttonContactForm} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
