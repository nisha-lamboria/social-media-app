import React from 'react';
import Header from '../../components/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Timeline } from '../../components/Timeline';
import { ActiveUserProvider } from '../../context/activeUserContext';


const Home = () => {
  return (
    <ActiveUserProvider>
       <div className='bg-gray-background'>
      <Header/>
      <div className='grid grid-cols-3 gap-4 justify-between mx-auto'>
        <Timeline/>
        <Sidebar/>
      </div>
    </div>
    </ActiveUserProvider>
  )
}

export default Home;