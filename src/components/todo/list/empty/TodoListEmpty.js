import React from 'react';
import { Card } from 'react-bootstrap';
import { InfoCircleFill } from 'react-bootstrap-icons';
import './TodoListEmpty.scss';

export default function TodoListEmpty() {
  return (
    <Card body>
      <div className="d-flex align-items-center todo-list-empty">
        <div className="mr-4 text-warning">
          <InfoCircleFill size={24} />
        </div>
        <div>Нет данных</div>
      </div>
    </Card>
  );
}
