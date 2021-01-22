import React, { useState, useMemo, useEffect } from 'react';

function UseMemo() {

  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  const countUp = () => {
    setNumber(number + 1)
  }

  useEffect(() => {
    console.log('Theme Changed in useMemo example');
  }, [themeStyles])

  return (
    <div className="wrapper" style={themeStyles}>
      <div>
        <h1>useMemo</h1>
        <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button className='button' onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <button className='button' onClick={countUp}>raise the number</button>
        <div>{doubleNumber}</div>
      </div>
    </div>
  );
}

function slowFunction(num) {
  for (let i = 0; i <= 10000000; i++) { }
  return num * 2
}

export default UseMemo;