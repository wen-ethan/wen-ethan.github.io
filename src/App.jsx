import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import SpatialComputing from './pages/projects/SpatialComputing'
import ApPhysicsC from './pages/projects/ApPhysicsC'
import GoogleFormAutofill from './pages/projects/GoogleFormAutofill'
import BlogTemplate from './pages/projects/BlogTemplate'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
      return () => {
        window.history.scrollRestoration = 'auto'
      }
    }
  }, [])

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/spatial-computing" element={<SpatialComputing />} />
        <Route path="/projects/ap-physics-c" element={<ApPhysicsC />} />
        <Route path="/projects/google-form-autofill" element={<GoogleFormAutofill />} />
        <Route path="/projects/blog-template" element={<BlogTemplate />} />
      </Routes>
    </>
  )
}
