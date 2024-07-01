import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import BrowseComponent from '@/components/Browse/BrowseComponent'
import BrowseNav from '@/components/Navbar/BrowseNav'
import AppLoader from '../AppLoader'
import ProtectedContent from '../ProtectedContent'
const Browse = () => {
  
  return (
    <div>
    <ProtectedContent>
    <div className='relative '>
      
      <BrowseNav/>
      <BrowseComponent/>
      
        
    </div>
    </ProtectedContent>
    </div>
  )
}

export default Browse
