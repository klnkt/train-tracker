import React from 'react';
import PropTypes from 'prop-types';
import './TextField.css';

function TextField({ id, title, ripple }) {
  return (
    <div
      className="mdc-text-field add-form_input"
      data-mdc-auto-init="MDCTextField"
    >
      <input type="text" className="mdc-text-field__input" id={id} />
      <label htmlFor={id} className="mdc-text-field__label">
        {title}
      </label>
      {ripple ? <div className="mdc-line-ripple" /> : ''}
    </div>
  );
}

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ripple: PropTypes.bool,
};

TextField.defaultProps = {
  ripple: false,
};

export default TextField;
