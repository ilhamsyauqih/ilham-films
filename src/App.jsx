import { useState } from 'react'
import NavigationBar from './components/NavigationBar';
import "./style/landingPage.css"

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className='myBG'>
      <NavigationBar />
      </div>
      {/* Intro Section End */}
    </div>
  );
}

export default App
