import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
