import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as BinIcon } from "../../icons/bin.svg";

import Button from "../../_share/Button/Button";
import { ContactList, Item, Title } from "./Contacts.styled";

function Contacts({ contacts, onDeleteContacts }) {
  return (
    <ContactList>
      <Title>Contacts</Title>
      {contacts.map(({ name, id, number }) => (
        <Item key={id} id={id}>
          {name}: {number}
          <Button
            type="button"
            ariaLabel="Delete contact"
            onDeleteContacts={() => onDeleteContacts(id)}
          >
            <BinIcon width="30" height="30" fill="red" />
          </Button>
        </Item>
      ))}
    </ContactList>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
};

export default Contacts;
