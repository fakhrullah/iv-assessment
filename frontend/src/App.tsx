import React from 'react';
import './App.css';

function App() {

  const offices = ['Singapore', 'London'];

  return (
    <div className="App">
      <div>
        Choose location:
        <select>
          {offices.map((office) => (<option value={office}>{office}</option>))}
        </select>
      </div>

      <div>Slider car number</div>

      <div style={{width: '100%', height: '120px', backgroundColor: '#333'}}>
        Map
      </div>

      <div>
        Refresh rate interval: 
        {' '}
        <input type="number"/>
      </div>

    </div>
  );
}

export default App;
