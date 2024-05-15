import React from 'react'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Graph/body';

const Screen = () => {
  return (
    <div >
        
    <Header />
    <div>
    <Sidebar  />
    <Body  />
 </div>
      
    </div>
  )
}

export default Screen
