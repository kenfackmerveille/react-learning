import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian';

function App() {
  return(
    <div className='App'>
      {/**accordian component */}
      <Accordian/>
    </div>
  );
}

export default App;
