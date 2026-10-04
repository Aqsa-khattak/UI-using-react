import React from 'react'
import {ArrowRight} from 'lucide-react'

const RightCardContent = (props) => {
  return (
      <div className='h-full w-full absolute top-0 left-0 p-5 flex flex-col justify-between '>

        <h2 className='w-8 h-8 bg-white rounded-full flex justify-center items-center text-sm font-bold'>{props.id+1}</h2>
        <div>
          <p className='text-white text-sm font-semibold mb-9 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione blanditiis laboriosam optio quos voluptatibus voluptatum.</p>

          <div className='flex justify-between gap-5'>
          <button className='bg-blue-500 rounded-full px-4 text-white font-semibold'>{props.tag}</button>
          <button className='bg-blue-500 rounded-full py-2 px-2 text-white font-semibold'><ArrowRight /></button>
          </div>
      
         </div>
      </div>
  )
}

export default RightCardContent
