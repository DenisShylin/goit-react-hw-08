import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import {
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <ul className={styles.list}>
      {filteredContacts?.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <span className={styles.contactInfo}>
            {name}: {number}
          </span>
          <button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
