import React from 'react';
import { useState } from 'react';

import { Background } from './components/Background/Background';

function App() {
  const [color,setColor]=useState('red');
  const [textColor,setTextColor]=useState('white');
  return (
    <div className="App">
      <button style={{background:color,color:textColor}} className='btn btn-primary' onClick={()=>{setColor("black");setTextColor('red')}}>Click here</button>
    </div>
    // <> 
    // <Background>back</Background>
    // </>
   
  );
}

export default App;
