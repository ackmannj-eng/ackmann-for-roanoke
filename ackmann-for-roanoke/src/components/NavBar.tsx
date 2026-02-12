import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  return (
    <div className="relative flex justify-end" ref={containerRef}>
      <button
        aria-expanded={open}
        aria-label="Open menu"
        onClick={() => setOpen((s) => !s)}
        className="bg-white p-2 m-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-2 mt-2 w-44 bg-white border rounded shadow-md z-50">
          <ul className="flex flex-col">
            <li>
              <Link to="/" onClick={() => setOpen(false)} className="block px-4 py-2 hover:bg-gray-50">Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setOpen(false)} className="block px-4 py-2 hover:bg-gray-50">About</Link>
            </li>
            <li>
              <Link to="/priorities" onClick={() => setOpen(false)} className="block px-4 py-2 hover:bg-gray-50">Priorities</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
