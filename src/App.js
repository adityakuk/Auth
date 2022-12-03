import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './components/Home';
import { Signup } from './components/Signup/Signup'
import { Login } from './components/Login/Login'
function App() {
  return (

    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
