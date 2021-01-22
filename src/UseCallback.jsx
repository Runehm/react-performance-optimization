import React, { useState, useCallback, useMemo } from 'react';
import List from './List';

function UseCallback() {

  const [numbers, setNumbers] = useState(1)
  const [darkMode, setDarkMode] = useState(false)

  const getItems = useCallback((incrementor) => {
    return [
      numbers + incrementor, 
      numbers + 1 + incrementor, 
      numbers + 2 + incrementor, 
      numbers + 3 + incrementor, 
      numbers + 4 + incrementor
    ]
  }, [numbers])

  const theme = useMemo(() => {
    return {
      backgroundColor: darkMode ? '#333' : '#fff',
      color: darkMode ? '#fff' : '#333'
    }
  })

  return (
    <div className="wrapper" style={theme}>
      <div>
        <h1>useCallback (and React.memo)</h1>
        <input type='number' value={numbers} onChange={e => setNumbers(parseInt(e.target.value))} />
        <button className='button' onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
        <List getItems={getItems} />
      </div>
    </div>
  );
}

export default UseCallback;


