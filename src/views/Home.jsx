import { useNavigate } from 'react-router-dom'
import HeroImg from '../assets/images/smart-parking.png'
import {BsFillRocketTakeoffFill} from 'react-icons/bs'
import { route } from '../routes'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="max-w-7xl mx-auto p-4 bg-white/20 min-h-[70dvh] grid grid-cols-1 lg:grid-cols-2">
      <div className='h-full w-full grid place-content-center'>
        <div>
          <h2 className='text-2xl'>Welcome</h2>
          <h2 className='text-2xl'>to</h2>
          <h2 className='text-3xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-tr py-2 from-purple-600 to-sky-500 font-bold'>myParking </h2>
          <button
            onClick={()=>navigate(route('register'))}
            className='px-6 py-2 rounded-md bg-gradient-to-tr from-purple-600 to-sky-500  text-white font-bold mt-8 inline-flex gap-2  group items-center hover:bg-sky-500 hover:scale-105 transition-transform duration-200'>
            <span>
              Get Started Now 
            </span>
            <BsFillRocketTakeoffFill className='group-hover:rotate-45 group-hover:scale-110 transition-transform duration-300' />
          </button>
          <p className="my-4 text-xl text-gray-600">
            Your App for <span className='font-bold uppercase'>Car</span>  Safety
          </p>
        </div>
      </div>
      <div>
        <img src={HeroImg} alt="Hero" className='objectif-contain scale-95 w-full h-full rounded-md' />
      </div>
    </div>
  )
}

export default Home