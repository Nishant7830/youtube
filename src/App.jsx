import Navbar from './components/Navbar'
import Sbar from './components/Sbar'
import Feed from './components/Feed'


function App() {


  return (
    <div>
    <Navbar/>
    <div className='flex mt-16'>
      <Sbar/>
      <Feed/>
    
    </div>


    </div>
  )
}

export default App
