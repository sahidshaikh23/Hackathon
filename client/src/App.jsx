import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { About, Home, Register, UserProfile, Login } from './pages/index'


function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />


        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
