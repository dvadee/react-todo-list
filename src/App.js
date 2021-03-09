import React from 'react';
import Content from './components/layout/Content';
import TodoAddForm from './components/todo/add-form/TodoAddForm';
import TodoList from './components/todo/list/TodoList';
import TodoFilterBtnGroup from './components/todo/filter/btn-group/TodoFilterBtnGroup';
import { FILTER_TYPES, FILTER_TYPES_TEXT } from './constants';

class App extends React.Component {
  render() {
    return (
      <Content>
        <div className="mb-5">
          <TodoAddForm className="mb-5" />
        </div>
        <div className="mb-5">
          <TodoList />
        </div>
        <div>
          <TodoFilterBtnGroup
            filters={this.getFilterButtonsConfig()}
            className="w-100"
          />
        </div>
      </Content>
    );
  }

  getFilterButtonsConfig() {
    return ['ALL', 'COMPLETE', 'INCOMPLETE'].map((type) => ({
      type: FILTER_TYPES[type],
      text: FILTER_TYPES_TEXT[type],
    }));
  }
}

export default App;
