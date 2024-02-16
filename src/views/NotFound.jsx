import { useNavigate } from 'react-router-dom'
import { route } from '../routes'



const NotFound = () => {
  const navigate = useNavigate()
  const handleClick = () =>{
    return navigate(route('home'))
  }
  return (
    <div className='grid place-content-center min-h-screen'>

      <div className='flex items-center justify-center flex-col'>
        <h1 className='text-2xl text-slate-500'>Ooops!!!</h1>
        <h1 className='text-4xl uppercase text-slate-600'> <span className='semibold text-blue-500'>404</span> Page Not Found </h1>
        <button className="text-2xl underline underline-offset-1 mt-4" onClick={handleClick}>Back to Home page</button>
      </div>
    </div>
  )
}

export default NotFound