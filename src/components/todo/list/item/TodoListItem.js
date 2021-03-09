import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTodo, setTodoCompleted } from '../../../../redux/actions';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import {
  Trash as CloseIcon,
  CheckSquare as CheckIcon,
  XSquare as UncheckIcon,
} from 'react-bootstrap-icons';
import './TodoListItem.scss';

const TodoListItem = function (props) {
  const isCompleted = props.completed;

  return (
    <Card className="mb-3" body>
      <div className="d-flex flex-nowrap align-items-center todo-list-item">
        <div>{props.content}</div>
        <div className="ml-auto">
          <ButtonGroup>
            <Button
              variant={isCompleted ? 'warning' : 'success'}
              title={isCompleted ? 'Отменить выполнение!' : 'Выполнено!'}
              onClick={() => props.setTodoCompleted(props.id, !isCompleted)}
            >
              {isCompleted ? (
                <CheckIcon className="icon" />
              ) : (
                <UncheckIcon className="icon" />
              )}
            </Button>
            <Button
              variant="danger"
              title="Удалить"
              onClick={() => props.removeTodo(props.id)}
            >
              <CloseIcon className="icon" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Card>
  );
};

TodoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  removeTodo: PropTypes.func,
  setTodoCompleted: PropTypes.func,
};

export default connect(null, { removeTodo, setTodoCompleted })(TodoListItem);
