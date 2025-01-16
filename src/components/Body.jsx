import React from 'react'
import Sbar from './Sbar'
import Feed from './Feed'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    
   <div className='flex mt-16'>
    <Sbar/>
    <Outlet/>
   </div>
    
  )
}

export default Body
