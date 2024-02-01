import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import MedicalOdetails from './Pages/MedicalOdetails'
import JoinUs from './Pages/Join-us'
import CodeOfConduct from './Pages/Code-of-conduct'
import Contactus from './Pages/ContactUs'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-projects" element={<Projects />} />
        <Route path="/medical-outreach-details" element={<MedicalOdetails />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="code-of-conduct" element={<CodeOfConduct />}/>
        <Route path="/contact-us" element={<Contactus />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
