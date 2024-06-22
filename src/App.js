
import './styles.css'
import Home from'./routes/Home1.js'
import About from'./routes/About'
import Contact from'./routes/Contact'
import Service from'./routes/Service'
import {Route,Routes} from "react-router-dom";
import SignUp from './routes/SignUp.js'
import SignIn from './routes/SignIn.js'
import Product from './components/Product.js'
function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/service"element={<Service/>}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path='/productpage/:id' element={<Product/>}/>
      </Routes>
  
   </div>
  );
}

export default App;
