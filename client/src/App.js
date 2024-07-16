import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './components/views/Footer/Footer';
import NotFound from './components/pages/NotFound/NotFound';
import Home from './components/pages/Home/Home';
import Header from './components/views/Header/Header';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/ad/:id" element={<Plays />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
