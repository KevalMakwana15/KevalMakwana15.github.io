import { Code2, GraduationCap, Lightbulb, Radar } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'

const qualities = [
  { icon: Code2, title: 'Build for the web', text: 'Drawn to the full stack, from thoughtful interfaces to the logic behind them.' },
  { icon: Lightbulb, title: 'Stay curious', text: 'Exploring modern tools and technologies one hands-on experiment at a time.' },
  { icon: Radar, title: 'Think creatively', text: 'I enjoy finding clear, practical ways through interesting problems.' },
]

export default function About() {
  return (
    <section className="content-section section-wrap" id="about">
      <SectionHeading index="01" eyebrow="A BIT ABOUT ME" title={<>Curious by nature.<br /><span>Building with intention.</span></>} description="A student, a builder-in-progress, and always up for learning something new." />
      <div className="about-layout">
        <Reveal className="about-focus">
          <div className="about-focus__top"><span>STUDENT PROFILE</span><GraduationCap size={21} /></div>
          <p className="about-focus__degree">B.Tech in<br /><span>Computer Science<br />&amp; Engineering</span></p>
          <p className="about-focus__summary">Building a foundation in programming, full stack development, and creative problem-solving.</p>
          <div className="about-focus__topics">
            <div><span>01</span><strong>Web development</strong></div>
            <div><span>02</span><strong>Programming</strong></div>
            <div><span>03</span><strong>Problem-solving</strong></div>
          </div>
        </Reveal>
        <Reveal className="about-copy" delay={0.08}>
          <p className="about-copy__lead">Hi, I’m Keval Makwana. I’m a second-year Computer Science and Engineering student at JG University, with a diploma background in Information Technology from LJ University.</p>
          <p>I’m passionate about full stack web development and enjoy exploring modern technologies, programming, and innovative digital solutions. I’m continuously learning, improving my technical skills, and looking for creative ways to solve problems.</p>
          <p>Every new concept is a chance to make something better. I’m here to keep experimenting, stay open-minded, and grow into a thoughtful developer.</p>
          <div className="quality-list">
            {qualities.map(({ icon: Icon, title, text }) => (
              <div className="quality-item" key={title}>
                <span className="quality-item__icon"><Icon size={18} /></span>
                <div><strong>{title}</strong><span>{text}</span></div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}