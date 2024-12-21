import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, actions) => {
    console.log("Form submitted with values:", values);
    addContact(values.username, values.usernumber);
    actions.resetForm();
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too short!")
      .max(50, "Max 50 characters!")
      .required("Required"),

    usernumber: Yup.string()
      .min(3, "Too short!")
      .max(50, "Max 50 characters!")
      .required("Required"),
  });

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ username: "", usernumber: "" }}
      validationSchema={registerSchema}
      validateOnChange={true} // Перевірка помилок під час зміни значення
      validateOnBlur={true} // Перевірка помилок при втраті фокуса
    >
      <div className={s.wrapperContactForm}>
        <Form className={s.formContactForm}>
          <label className={s.labelContactForm}>
            <span>Name</span>
            <Field className={s.inputContactForm} type="text" name="username" />
            <ErrorMessage
              name="username"
              component="div"
              className={s.errorMessage}
            />
          </label>
          <label className={s.labelContactForm}>
            <span>Number</span>
            <Field
              className={s.inputContactForm}
              type="text"
              name="usernumber"
            />
            <ErrorMessage
              name="usernumber"
              component="div"
              className={s.errorMessage}
            />
          </label>
          <button className={s.buttonContactForm} type="submit">
            Add contact
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default ContactForm;
