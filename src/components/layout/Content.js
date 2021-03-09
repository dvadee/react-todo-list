import React from 'react';
import PropTypes from 'prop-types';
import { Container, Navbar } from 'react-bootstrap';

const Content = function (props) {
  return (
    <Container>
      <Navbar>
        <Navbar.Brand>Todo app</Navbar.Brand>
      </Navbar>
      <div className="py-5">{props.children}</div>
    </Container>
  );
};

Content.propTypes = {
  children: PropTypes.array,
};

export default Content;
