import { useState } from "react";
import PropTypes from "prop-types";
import { FormWrap, Label, Input, Button } from "./Form.styled";

export const Form = ({ contacts, onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onInputHandler = (e) => {
    const key = e.target.name;

    switch (key) {
      case "name":
        setName(e.currentTarget.value);
        break;
      case "number":
        setNumber(e.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sameContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (sameContact) {
      alert(`${name} is already in contacts`);
      clearSet();
      return;
    }

    onSubmit(name, number);

    clearSet();
  };

  const clearSet = () => {
    setName("");
    setNumber("");
  };

  return (
    <FormWrap onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onInputHandler}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>
      <Label>
        Phone
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={onInputHandler}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormWrap>
  );
};

Form.propTypes = {
  contacts: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
