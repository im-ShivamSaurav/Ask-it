import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import BrowseComponent from '@/components/Browse/BrowseComponent'
import BrowseNav from '@/components/Navbar/BrowseNav'

const Browse = () => {
  
  return (
    <div>
        <BrowseNav/>
        <BrowseComponent/>
    </div>
  )
}

export default Browse
