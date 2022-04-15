import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//* pages
import Home from './components/pages/Home/Home';
import Contato from './components/pages/Contato';
import Sobre from './components/pages/Sobre';
import NewProject from './components/pages/NewProjetc/NewProject';
import Company from './components/pages/Company';
import Project from './components/pages/Project';
import ProjectEdit from './components/pages/ProjectEdicao/Index';
//* components
import Container from './components/layout/Container/Container';
import Navbar from './components/layout/Navbar/index';
import Footer from './components/layout/Footer/index';
//* styled-components

function App() {
  return (
    <Router>
      <Navbar />
      <Container minHeight="75vh">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contato />} />
          <Route path="/company" element={<Company />} />
          <Route path="/about" element={<Sobre />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project:id" element={<ProjectEdit />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
