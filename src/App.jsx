import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1789479939747-48c1a0215889?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661288427124-0404be82ff7a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1620828771830-fb3fa87866b6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Underbank'
    }
  ]
  
  
  return (
    <div>
      <Section1  users={users}/>
      <Section2 />
      
      
    </div>
  )
}

export default App

