import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import SpatialComputing from './pages/projects/SpatialComputing'
import ApPhysicsC from './pages/projects/ApPhysicsC'
import GoogleFormAutofill from './pages/projects/GoogleFormAutofill'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects/spatial-computing" element={<SpatialComputing />} />
      <Route path="/projects/ap-physics-c" element={<ApPhysicsC />} />
      <Route path="/projects/google-form-autofill" element={<GoogleFormAutofill />} />
    </Routes>
  )
}
