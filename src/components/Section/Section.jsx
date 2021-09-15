import React from "react";
import PropTypes from "prop-types";
import { Title } from "./Section.styled";

function Section({ title, children }) {
  return (
    <section>
      {title && <Title>Phonebook</Title>}

      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
