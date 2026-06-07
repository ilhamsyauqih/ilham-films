import { useState } from 'react'
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import "./style/landingPage.css"
import Trending from './components/Trending';

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className='myBG'>
      <NavigationBar />
      <Intro />
      </div>
      {/* Intro Section End */}
      {/* Trending Section */}
      <div className='trending'>
        <Trending />
      </div>
      {/* Trending Section End */}
    </div>
  );
}

export default App
