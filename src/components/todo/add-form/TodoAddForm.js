import React from 'react';
import PropTypes from 'prop-types';
import { Form, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addTodo } from '../../../redux/actions';

class TodoAddForm extends React.Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      todoText: '',
    };
  }

  render() {
    return (
      <div onKeyDown={this.onFormKeyDown}>
        <Form.Row>
          <Col xs={12}>
            <h6>Введите текст</h6>
          </Col>
          <Col xs={10}>
            <Form.Control
              onChange={this.onTodoTextInputChange}
              value={this.state.todoText}
            />
          </Col>
          <Col xs={2}>
            <Button
              variant="success"
              block={true}
              onClick={this.onAddBtnClick}
              disabled={!this.isTodoTextValid}
            >
              Добавить
            </Button>
          </Col>
        </Form.Row>
      </div>
    );
  }

  onTodoTextInputChange = (e) => {
    this.setState({
      todoText: e.target.value,
    });
  };

  onAddBtnClick = () => {
    this.addTodo();
  };

  onFormKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.addTodo();
    }
  };

  addTodo() {
    if (!this.isTodoTextValid) {
      return;
    }

    this.props.addTodo(this.todoText);

    this.clear();
  }

  clear() {
    this.setState({
      todoText: '',
    });
  }

  get isTodoTextValid() {
    return this.todoText !== '';
  }

  get todoText() {
    return this.state.todoText;
  }
}

export default connect(null, { addTodo })(TodoAddForm);
