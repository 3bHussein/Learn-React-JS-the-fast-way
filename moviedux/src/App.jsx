// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './styles.css'
// the Real Work start from here
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
 
  

  return (
    <>
    
    <div className='APP'>
      {/* <header className='header'> 
        <h1>
          welcome to moviedux
        </h1>
        

      </header> */}
      <div className='container'>
        {/* this one html tag */}
        {/* <header></header> */}
        {/* this one component */}

        <Header></Header>
      </div>



        <Footer></Footer>
      </div>     

    </>
  )
}

// export default App
