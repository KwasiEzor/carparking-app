
import NamedLink from '@/components/NamedLink'
import { useAuth } from '@/hooks/useAuth'
import {FaUserLock} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()
 
  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response?.status === 401) logout(true)
      return Promise.reject(error)
    },
  )
 

 
  function leftAuthLinks() {
    return <>
      <NamedLink name="parkings.active">
        Parkings
      </NamedLink>
      <NamedLink name="vehicles.index">
        Vehicles
      </NamedLink>
      <NamedLink name="parkings.history">
        History
      </NamedLink>
    </>
  }
 
  function rightGuestLinks() {
    return <>
      <NamedLink name="login">
        <FaUserLock className='' size={20}/>
      </NamedLink>
      <NamedLink name="register">
        Register
      </NamedLink>
    </>
  }
 
  function rightAuthLinks() {
    return <>
      <NamedLink name="profile.edit">
        Profile
      </NamedLink>
      <NamedLink name="profile.change-password">
        Change Password
      </NamedLink>
      <button onClick={ logout } type="button" className="text-blue-600">
        Logout
      </button>
    </>
  }
  return (
    <header className="py-6 bg-gray-100 shadow">
      <div className="container md:px-2 max-w-7xl px-4 mx-auto">
        <nav className="flex gap-4 justify-between">
          <div className="flex gap-4 items-center">
            <h2 className="text-xl font-bold">
              <Link to={'/'}>
                <div
                  className="inline-flex items-center justify-center bg-blue-600 w-6 h-6 text-center text-white rounded mr-1"
                >
                  P
                </div>
                <span>

                  myParking
                </span>
              </Link>
            </h2>
            { isLoggedIn ? leftAuthLinks() : <>{''}</> }
          </div>
          <div className="flex gap-4 items-center">
            { isLoggedIn ? rightAuthLinks() : rightGuestLinks() }
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar