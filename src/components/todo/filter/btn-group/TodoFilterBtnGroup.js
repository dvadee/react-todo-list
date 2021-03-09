import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getVisibilityFilterType } from '../../../../redux/selectors';
import { setTodoVisibilityFilter } from '../../../../redux/actions';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
/**
 *
 * @param props
 * @param props.activeFilterType
 * @param {Object[]} props.filters
 * @param {String} props.filters.type
 * @param {String} props.filters.text
 * @param {Function} props.filters.onFilterTypeChange
 * @returns {JSX.Element}
 * @constructor
 */
const TodoFilterBtnGroup = function (props) {
  return (
    <ButtonGroup className={props.className} toggle>
      {props.filters.map(({ type, text }, index) => {
        return (
          <ToggleButton
            type="radio"
            variant="secondary"
            value={type}
            onClick={() => props.setTodoVisibilityFilter(type)}
            checked={type === props.activeFilterType}
            key={index}
          >
            {text}
          </ToggleButton>
        );
      })}
    </ButtonGroup>
  );
};

TodoFilterBtnGroup.propTypes = {
  filters: PropTypes.array.isRequired,
  className: PropTypes.string,
  activeFilterType: PropTypes.string.isRequired,
  setTodoVisibilityFilter: PropTypes.func,
};

const mapStateToProps = (state) => ({
  activeFilterType: getVisibilityFilterType(state),
});

export default connect(mapStateToProps, { setTodoVisibilityFilter })(
  TodoFilterBtnGroup
);
