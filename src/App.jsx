import { Routes, Route, useLocation } from 'react-router-dom'
import { useLayoutEffect, useRef } from 'react'
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
  const isInitialMount = useRef(true)

  // Deliberately does NOT touch history.scrollRestoration. Setting it to
  // 'manual' broke iOS pull-to-refresh -- the gesture would stick partway down
  // and never spring back. Confirmed by disabling this component entirely, at
  // which point the gesture worked; skipping only the scroll call below was not
  // enough, which left scrollRestoration as the cause. Leaving it at the default
  // 'auto' also gives sensible back/forward scroll restoration for free.

  useLayoutEffect(() => {
    // Only in-app route changes need resetting. This fires on every mount too,
    // including reloads, where the browser already handles scroll position.
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }
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
