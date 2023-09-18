import './App.css'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
// import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {

  return (
    <>
     <NavBar></NavBar>
     <br />
      {/* <DaisyNav></DaisyNav> */}
    
      <h1 className='text-7xl bg-rose-700'>Vite + React</h1>
      <br />
      <PriceOptions></PriceOptions>
    
    </>
  )
}

export default App
