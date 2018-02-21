import React from 'react';
import CheckBox from '../material-components/CheckBox';
import TextField from '../material-components/TextField';
import Button from '../material-components/Button';

function AddExerciseType() {
  return (
    <div className="mdc-typography">
      <span className="mdc-typography--title">
        Add new exercise
      </span>
      <form id="add-exrcs" className="">
        <TextField id="exercise-title" title="Title" ripple="true" />
        <CheckBox id="weight-property" title="Weight" />
        <CheckBox id="repetitions-property" title="Repetitions" />
        <Button text="save" />
        <Button text="cancel" />
      </form>
    </div>
  );
}

export default AddExerciseType;
