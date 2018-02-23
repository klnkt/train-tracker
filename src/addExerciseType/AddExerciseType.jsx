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
      <form id="add-exercise" className="">
        <TextField id="exercise-title" title="Title" ripple required />
        <CheckBox id="weight-property" title="Weight" checked />
        <CheckBox id="repetitions-property" title="Repetitions" checked />
        <Button
          text="save"
          ormId="add-exercise"
          onSubmit={() => true}
        />
        <Button text="cancel" />
      </form>
    </div>
  );
}

export default AddExerciseType;
