import React from 'react';
import PropTypes from 'prop-types';

function Button({ text, raised, icon }) {
  return (
    <button className={`mdc-button ${raised ? 'mdc-button--raised' : ''}`}>
      {icon === '' &&
        <i className="material-icons mdc-button__icon">{icon}</i>
      }
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  raised: PropTypes.bool,
  icon: PropTypes.string,
};

Button.defaultProps = {
  text: 'click',
  raised: false,
  icon: '',
};

export default Button;
