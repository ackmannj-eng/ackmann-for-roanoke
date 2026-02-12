import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Priorities from './pages/Priorities'

function App() {
  return (
    <Router>
      <div className="w-screen">
        <div className="app-root min-h-screen flex flex-col items-center justify-center">
          <a className="skip-link" href="#main">Skip to main content</a>

          <header className="site-header w-full" role="banner">
            <div className="mx-auto flex items-center justify-between py-0 px-4 w-full h-20">
              <Link to="/" className="bg-white p-2 m-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </Link>

              <div className="brand text-center flex-1">
                <h1 className="candidate">Jonathan Ackmann</h1>
                <p className="office">for Roanoke City Council — Ward 2</p>
              </div>

              <NavBar />
            </div>
          </header>

          <main id="main" className="w-full flex-1" role="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/priorities" element={<Priorities />} />
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

