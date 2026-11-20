import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero__grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-kicker"><span className="status-dot" /> JG UNIVERSITY <span className="hero-kicker__line" /> COMPUTER SCIENCE</div>
          <p className="hero-intro">A little about me</p>
          <h1>Hi, I’m <span>Keval</span><br />Makwana<span className="hero-period">.</span></h1>
          <p className="hero-role">Computer Science &amp; Engineering Student<br /><span>Full Stack Web Development Enthusiast</span></p>
          <p className="hero-description">I’m a second-year student at JG University, building on my IT diploma from LJ University. These days, I’m learning full stack development and finding out how the different parts of a web application fit together.</p>
          <div className="hero-actions">
            <a className="button button--lime" href="#about">About me <ArrowDownRight size={17} /></a>
            <a className="button button--quiet" href="#contact">Let’s connect <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-socials" aria-label="Social profiles">
            <a href="https://www.linkedin.com/in/keval-makwana-a7840b423" target="_blank" rel="noreferrer" aria-label="Keval Makwana on LinkedIn"><Linkedin size={17} /></a>
            <a href="https://github.com/KevalMakwana15" target="_blank" rel="noreferrer" aria-label="Keval Makwana on GitHub"><Github size={17} /></a>
            <span>FIND ME AROUND THE WEB</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96, rotate: 1.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-placeholder">
            <img className="portrait-placeholder__photo" src="/keval-makwana.jpeg" alt="Keval Makwana" />
          </div>
        </motion.div>
      </div>
      <div className="hero-bottomline"><span>SCROLL TO EXPLORE</span><span className="hero-bottomline__rule" /><span>01 — 06</span></div>
    </section>
  )
}