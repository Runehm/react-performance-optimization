import React from 'react';
import './App.css';
import './styles.scss';
import UseCallback from './UseCallback';
import UseMemo from './useMemo';

function App() {

  return (
   <div className='App'>
    <UseMemo/>
    <UseCallback/>
   </div>
  );
}

export default App;
