import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import MedicalOdetails from './Pages/MedicalOdetails'
import JoinUs from './Pages/Join-us'
function App() {
  ///contact-us
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-projects" element={<Projects />} />
        <Route path="/medical-outreach-details" element={<MedicalOdetails />} />
        <Route path="/join-us" element={<JoinUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
