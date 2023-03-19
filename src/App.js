import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
function App() {
  return (
    <div className='bg-gray-900 text-white h-screen'>
         <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
