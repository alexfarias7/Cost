import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

//* pages
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Sobre from './components/pages/Sobre';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company';
//* components
import Container from './components/layout/Container/Container';
//* styled-components

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/newproject">Novo projeto</Link>
      </ul>
      <Container  minHeight='75vh'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contato />} />
          <Route path="/company" element={<Company />} />
          <Route path="/about" element={<Sobre />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
