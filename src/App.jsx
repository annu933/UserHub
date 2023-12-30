import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar/Navbar';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Signup from '../src/components/signup/Signup';
import Signin from './components/signin/Signin';
import Home from '../src/components/home/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';

function App() {

  return (
    <div>
    <Provider store={store}>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/user" element={<Home />} />
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App
