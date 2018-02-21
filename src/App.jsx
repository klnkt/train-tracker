import React from 'react';
import * as mdc from 'material-components-web';
import './App.css';
import Toolbar from './toolbar/Toolbar';
import AddExerciseType from './addExerciseType/AddExerciseType';

class App extends React.Component {
  componentDidMount() {
    mdc.autoInit();
  }

  render() {
    return (
      <div>
        <Toolbar />
        <div className="app_content">
          <AddExerciseType />
        </div>
      </div>
    );
  }
}

export default App;
