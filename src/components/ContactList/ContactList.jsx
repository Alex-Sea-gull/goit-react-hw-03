import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <div className={s.wrapperListItem}>
      <li className={s.contactListItem}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </li>
    </div>
  );
};

export default ContactList;
