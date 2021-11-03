import PropTypes from 'prop-types';

import styles from "./Contact.module.css";

const Contact = ({ filter, onClick }) => {
    const filtered = filter();
    return (
    <ul className={styles.contactList}>
        {filtered.map(item => 
            <li key={item.id} className={styles.contactItem}>
                <span className={styles.spanName}>{item.name}</span>
                <span className={styles.spanNumber}>{item.number}</span>
                <button type="submit" onClick={() => onClick(item.id)} className={styles.contactButton}>Delete</button>
            </li>
            )}
    </ul>
    )
}

export default Contact;

Contact.propTypes = {
    onClick: PropTypes.func.isRequired,
    filter: PropTypes.func.isRequired
}