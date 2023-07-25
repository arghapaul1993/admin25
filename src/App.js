import './App.css';
import AllRouters from './Components/AllRouters';
import Navbar from './Components/Nav/Navbar';


function App() {
  return (
   <>
    {localStorage.getItem('isLogin') == 'true' && <Navbar/>}
  <AllRouters/>


   </>
  );
}

export default App;
