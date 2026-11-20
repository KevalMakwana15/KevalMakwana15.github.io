import { ArrowUpRight, Github, Linkedin } from 'lucide-react'

const footerLinks = [
  ['About', '#about'], ['Education', '#education'], ['Skills', '#skills'], ['Interests', '#interests'], ['Contact', '#contact'],
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap">
        <div className="footer-main">
          <a className="footer-brand" href="#home"><span>KM<span>.</span></span><strong>KEVAL MAKWANA</strong><small>Learning Today, Building Tomorrow.</small></a>
          <div className="footer-nav"><span className="footer-label">EXPLORE</span>{footerLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
          <div className="footer-social"><span className="footer-label">ELSEWHERE</span><a href="https://www.linkedin.com/in/keval-makwana-a7840b423" target="_blank" rel="noreferrer" aria-label="Keval Makwana on LinkedIn"><Linkedin size={17} /><span>LinkedIn</span><ArrowUpRight size={13} /></a><a href="https://github.com/KevalMakwana15" target="_blank" rel="noreferrer" aria-label="Keval Makwana on GitHub"><Github size={17} /><span>GitHub</span><ArrowUpRight size={13} /></a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Keval Makwana</span><span>MADE WITH CURIOSITY <i>✳</i></span><a href="#home">BACK TO TOP ↑</a></div>
      </div>
    </footer>
  )
}