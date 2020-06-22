import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';




function App(props) {
  const {onChange} = props; 
  const [value, setValue]  = useState(''); 
  const handleChange = useCallback(event => {
    setValue(event.target.value); 
  }, [setValue]); 

  const handleBlur = useCallback(() => {
    onChange(value); 

  }, [value, onChange]); 

  return (
    <div className="App">
      <header className="App-header">
        <input type = "text" onChange = {handleChange} onBlur = {handleBlur}/>
      </header>
    </div>
  );
}

export default App;
