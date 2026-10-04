import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);
  
  return (
    <div className='h-full w-3/4 p-5 flex flex-nowrap gap-7 ' >
      
      {props.users.map(function(elem, idx){
       
       return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}

     

    </div>
  )
}

export default RightContent
