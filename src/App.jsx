import './App.css'
import avatar from '../assets/images/avatar-jessica.jpeg'

function App() {

  return (
    <div className='bg-[#1f1f1f] text-white w-80 sm:w-96 p-6 rounded-md text-center'>
      <img src={avatar} alt="avatar" className='rounded-full w-24 h-24 mx-auto mb-4' />
      <h1 className='text-3xl'>
        Jessica Randall
      </h1>
      <h2 className='text-[#c5f82a]'>London, United Kingdom</h2>
      <p className='my-6'>
        &quot;Front-end developer and avid reader.&quot;
      </p>

      <ul>
        <li className='bg-[#333333] rounded-md p-2 my-2 hover:text-[#1f1f1f] hover:bg-[#c5f82a] hover:cursor-pointer'>GitHub</li>
        <li className='bg-[#333333] rounded-md p-2 my-2 hover:text-[#1f1f1f] hover:bg-[#c5f82a] hover:cursor-pointer'>Frontend Mentor</li>
        <li className='bg-[#333333] rounded-md p-2 my-2 hover:text-[#1f1f1f] hover:bg-[#c5f82a] hover:cursor-pointer'>LinkedIn</li>
        <li className='bg-[#333333] rounded-md p-2 my-2 hover:text-[#1f1f1f] hover:bg-[#c5f82a] hover:cursor-pointer'>Twitter</li>
        <li className='bg-[#333333] rounded-md p-2 my-2 hover:text-[#1f1f1f] hover:bg-[#c5f82a] hover:cursor-pointer'>Instagram</li>
      </ul>
    </div>
  )
}

export default App
