import React from 'react';
import PropTypes from 'prop-types';

function CheckBox({ id, title, checked }) {
  return (
    <div className="mdc-form-field">
      <div className="mdc-checkbox">
        <input
          type="checkbox"
          id={id}
          className="mdc-checkbox__native-control"
          defaultChecked={checked}
        />
        <div className="mdc-checkbox__background">
          <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path
              className="mdc-checkbox__checkmark-path"
              fill="none"
              stroke="white"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
          <div className="mdc-checkbox__mixedmark" />
        </div>
      </div>
      <label htmlFor={id}>{title}</label>
    </div>
  );
}

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

CheckBox.defaultProps = {
  checked: false,
};

export default CheckBox;
