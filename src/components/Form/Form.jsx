import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Form.module.css";

class Form extends React.Component {
    state = {
        name: "",
        number: "",
    }

    handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
    };
    
    reset = () => {
   this.setState({ name: "", number: "" });
    };
    
    formSubmit = (event) => {
        event.preventDefault();

        const contact = {
        id: uuidv4(),
        ...this.state,
        };
        
        this.props.onSubmit(contact);

        this.reset();
    };
    

    render() {
        return (
            <form onSubmit={this.formSubmit} className={styles.form}>
                <label className={styles.labelInput}>
                    <h3 className={styles.title}>Name</h3>
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        placeholder="Name"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required />
                </label>
                <label className={styles.labelInput}>
                    <h3 className={styles.title}>Number</h3>
                    <input
                        className={styles.input}
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleInputChange}
                        placeholder="Number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required />
                </label>
                <button  className={styles.buttonForm} type="submit">Add name</button>
            </form>
        )
    }
}

export default Form;