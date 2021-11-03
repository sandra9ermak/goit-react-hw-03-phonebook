import PropTypes from 'prop-types';
import styles from "./Filter.module.css";

const Filter = ({ onChange, value }) => {
    return (
        <label>
            <input className={styles.inputSearch} type="text" name="filter" value={value} placeholder="Search contact" onChange={onChange} />
            <button className={styles.button} type="submit">Search</button>
        </label>
    )
}

export default Filter;

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}