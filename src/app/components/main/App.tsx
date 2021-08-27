import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import StudentView from './StudentView';


const student: Student = {
  id: 1,
  name: "pasindu",
  age: 24
}


const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>Student Component</p>
          <p>------------------</p>
          <StudentView student={student} />
        </div>
        <div>
          <p>Counter Component</p>
          <p>------------------</p>
          <Counter />
        </div>
      </header>

    </div>
  );
}

export default App;
