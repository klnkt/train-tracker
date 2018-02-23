import React from 'react';
import PropTypes from 'prop-types';

function Button({
  text, formId, raised, icon, onClick, onSubmit,
}) {
  return (
    <button
      className={`mdc-button ${raised ? 'mdc-button--raised' : ''}`}
      onSubmit={() => onSubmit}
      onClick={() => onClick}
      form={formId}
    >
      {icon === '' &&
        <i className="material-icons mdc-button__icon">{icon}</i>
      }
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  formId: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  raised: PropTypes.bool,
  icon: PropTypes.string,
};

Button.defaultProps = {
  text: 'click',
  formId: '',
  raised: false,
  icon: '',
};

export default Button;
