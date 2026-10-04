import {ArrowRight} from 'lucide-react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-58 rounded-2xl overflow-hidden relative'>
      <img className='h-full object-cover' 
      src={props.img} alt="" />

      <RightCardContent id={props.id} tag={props.tag}/>

    </div>
  )
}

export default RightCard
