import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="w-screen">
        <div className="app-root min-h-screen flex flex-col items-center justify-center">
          <a className="skip-link" href="#main">Skip to main content</a>

          <header className="site-header w-full" role="banner">
            <div className="brand text-center py-4">
              <h1 className="candidate">Jonathan Ackmann</h1>
              <p className="office">for Roanoke City Council — Ward 2</p>
            </div>
            <NavBar />
          </header>

          <main id="main" className="w-full flex-1" role="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <footer className="site-footer py-4" role="contentinfo">
            <p>Pol. adv. paid for by Jonathan Ackmann</p>
          </footer>
        </div>
      </div>
    </Router>
  )
}

export default App

