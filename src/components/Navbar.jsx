import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['About', '#about'],
  ['Education', '#education'],
  ['Skills', '#skills'],
  ['Interests', '#interests'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="wordmark__symbol">K<span>.</span></span>
          <span>KEVAL MAKWANA</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div className={`nav-links${menuOpen ? ' nav-links--open' : ''}`} id="primary-navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-availability" href="#contact"><span /> Open to connect</a>
        </div>
      </nav>
    </header>
  )
}