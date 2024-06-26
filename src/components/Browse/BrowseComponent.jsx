'use client'

import React, { use } from 'react'
import MainComponent from './MainContainer/MainComponent'
import SecondaryComponent from './SecondaryContainer/SecondaryComponent'


const BrowseComponent = () => {
   
  return (
    <div className=' relative bg-[#121212] select-none'>
        <MainComponent/>
        <SecondaryComponent />
        
    </div>
  )
}

export default BrowseComponent
