import React from 'react';
import './Toolbar.css';

function Toolbar() {
  return (
    <header
      className="mdc-toolbar mdc-typography"
      style={{ paddingLeft: '60px' }}
    >
      <div className="mdc-toolbar__row">
        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
          <span className="mdc-toolbar__title">The greatest fitness app ever.</span>
        </section>
      </div>
    </header>
  );
}

export default Toolbar;
