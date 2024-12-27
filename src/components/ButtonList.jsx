import React from 'react'
const buttonList = ["All","Javscript","java","Music","Live","Songs","vlogs","tranding"]
const ButtonList = () => {
  return (
    <div className='py-4'>
      {
         buttonList.map((item,index) =>{
          return  <button className='bg-gray-200 font-medium mx-2 px-4 py-1 rounded-lg'>{item}</button>
         })
      }

     </div>
  )
}

export default ButtonList
