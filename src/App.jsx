import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

 
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className="container md:px-2 px-4 pt-8 md:pt-16 mx-auto">
        <Outlet />
      </div>
    </div>
  )
}
 
export default App