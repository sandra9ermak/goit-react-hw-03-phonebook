import Notiflix from "notiflix";
import "./App.css";
import styles from "../components/Form/Form.module.css";
import React from "react";
import Contact from "../components/Contact/Contact";
import Form from "../components/Form/Form";
import Filter from "../components/Filter/Filter";

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contactsJson = JSON.parse(localStorage.getItem("contacts"));
    if (contactsJson) this.setState({ contacts: contactsJson });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  renderContact = ({ name, number, id }) => {
    const item = {
      id,
      name,
      number,
    };

    if (
      this.state.contacts.some(
        (item) => item.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notiflix.Notify.warning(`${name} is already in contacts`);
    } else if (this.state.contacts.some((item) => item.number === number)) {
      return Notiflix.Notify.warning(`${number} is already in contacts`);
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, item],
      }));
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  filteredContacts = () => {
    return this.state.contacts.filter(
      (item) =>
        item.name.toLowerCase().includes(this.state.filter.toLowerCase()) ||
        item.number.includes(this.state.filter)
    );
  };

  deleteContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((item) => item.id !== id),
      };
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.section}>
          <h1 className={styles.mainTitle}>Phonebook</h1>
          <Form onSubmit={this.renderContact}></Form>
          <h2 className={styles.mainTitle}>Contacts</h2>
          <Filter
            onChange={this.handleInputChange}
            value={this.state.filter}
          ></Filter>
          <Contact
            filter={this.filteredContacts}
            onClick={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
