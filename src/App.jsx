import { useState } from 'react'
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import "./style/landingPage.css"

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className='myBG'>
      <NavigationBar />
      <Intro />
      </div>
      {/* Intro Section End */}
    </div>
  );
}

export default App
