import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form } from "./components/Form/Form";
import Contacts from "./components/Contacts/Contacts";
import Section from "./components/Section/Section";
import Filter from "./components/Filter/Filter";

const contactListTmp = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("contacts")) ?? contactListTmp
    );
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      name,
      id: uuidv4(),
      number,
    };

    setContacts((prevState) => [newContact, ...prevState]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedContacts = filter.toLowerCase();

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );
    return filteredContacts;
  };

  return (
    <>
      <Section title="Phonebook">
        <Form onSubmit={addContact} contacts={contacts} />
        <Filter value={filter} onChange={changeFilter} />
        <Contacts
          contacts={getFilteredContacts()}
          onDeleteContacts={deleteContact}
        />
      </Section>
    </>
  );
};
