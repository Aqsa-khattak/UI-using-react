import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1Content = (props) => {
  return (
    <div className='pb-7 px-10 pt-4 flex gap-6 items-center h-[90vh]'>

      <LeftContent/>
      <RightContent users={props.users}/>
     

    </div>
  )
}

export default Page1Content
