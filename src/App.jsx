import './App.css'
import avatar from '../assets/images/avatar-jessica.jpeg'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className='bg-[#1f1f1f] text-white sm:p-4 sm:w-96 p-6 rounded-md text-center font-Inter'>
      <img src={avatar} alt="avatar" className='rounded-full w-24 h-24 mx-auto mb-4' />
      <h1 className='text-2xl font-semibold my-3'>
        Jessica Randall
      </h1>
      <h2 className='text-[#c5f82a] text-xs font-semibold'>London, United Kingdom</h2>
      <p className='my-6 text-sm'>
        &quot;Front-end developer and avid reader.&quot;
      </p>

      <ul>
        <a href='https://github.com/Yinkajay'>
          <li className='bg-[#333333] rounded-md p-2 my-2 hover:text-[#1f1f1f] hover:bg-[#c5f82a] hover:cursor-pointer font-semibold'>GitHub</li>
        </a>

        <a href='https://www.frontendmentor.io/profile/Yinkajay'>
          <li className='bg-[#333333] rounded-md p-2 my-2 hover:text-[#1f1f1f] hover:bg-[#c5f82a] hover:cursor-pointer font-semibold'>Frontend Mentor</li>
        </a>

        <a href='https://www.linkedin.com/in/yinka-junaid-a9a654171/'>
          <li className='bg-[#333333] rounded-md p-2 my-2 hover:text-[#1f1f1f] hover:bg-[#c5f82a] hover:cursor-pointer font-semibold'>LinkedIn</li>
        </a>

        <a href='https://www.linkedin.com/in/yinka-junaid-a9a654171/'>
          <li className='bg-[#333333] rounded-md p-2 my-2 hover:text-[#1f1f1f] hover:bg-[#c5f82a] hover:cursor-pointer font-semibold'>Twitter</li>
        </a>

        <a href='https://www.instagram.com/yinka_jun/'>
          <li className='bg-[#333333] rounded-md p-2 my-2 hover:text-[#1f1f1f] hover:bg-[#c5f82a] hover:cursor-pointer font-semibold'>Instagram</li>
        </a>

      </ul>

      
    </div>

    <Footer />
    </>
  )
}

export default App
