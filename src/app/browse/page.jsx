import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import BrowseComponent from '@/components/Browse/BrowseComponent'
import BrowseNav from '@/components/Navbar/BrowseNav'
import AppLoader from '../AppLoader'
// import UserExistsRedirection from '../UserExistsRedirection'
const Browse = () => {
  
  return (
    <AppLoader>
    <div className='relative '>
      
      <BrowseNav/>
      <BrowseComponent/>
      
        
    </div>
    </AppLoader>
  )
}

export default Browse
