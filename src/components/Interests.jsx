import { BrainCircuit, Braces, Code2, Cpu, Layers3, Monitor } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'

const interests = [
  { icon: Layers3, title: 'Full Stack Web Development', text: 'How frontend, backend, and data fit together into a complete experience.', color: 'blue' },
  { icon: Monitor, title: 'Frontend Development', text: 'Interfaces that feel clear, considered, and genuinely useful.', color: 'lime' },
  { icon: Code2, title: 'Backend Development', text: 'The systems and application logic that make products work.', color: 'violet' },
  { icon: Cpu, title: 'Exploring New Technologies', text: 'Following new ideas and learning by getting hands-on.', color: 'coral' },
  { icon: Braces, title: 'Programming', text: 'Practising the logic and structure behind good solutions.', color: 'coral' },
  { icon: BrainCircuit, title: 'AI & Innovation', text: 'Curious about how emerging tools can help people create.', color: 'blue' },
]

export default function Interests() {
  return (
    <section className="content-section content-section--alt" id="interests">
      <div className="section-wrap">
        <SectionHeading index="04" eyebrow="WHAT SPARKS MY CURIOSITY" title={<>Questions worth<br /><span>following.</span></>} description="The topics I keep coming back to, learning about, and exploring further." />
        <div className="interest-grid">
          {interests.map(({ icon: Icon, title, text, color }, index) => (
            <Reveal className={`interest-card interest-card--${color}`} delay={index * 0.045} key={title}>
              <div className="interest-card__top"><Icon size={21} /><span>0{index + 1}</span></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="interest-card__dash" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}