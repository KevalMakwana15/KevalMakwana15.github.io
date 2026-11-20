import { Braces, CodeXml, Database, GitBranch, Layers3, Server } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'

const groups = [
  { icon: CodeXml, number: '01', title: 'Frontend development', description: 'Exploring semantic markup, responsive styling, and interactive interfaces.', tags: ['HTML', 'CSS', 'JavaScript', 'React.js'] },
  { icon: Server, number: '02', title: 'Backend development', description: 'Learning how APIs, routes, and server-side logic fit together.', tags: ['Node.js', 'Express.js'] },
  { icon: Database, number: '03', title: 'Database', description: 'Studying relational and document databases and how apps use them.', tags: ['MongoDB', 'MySQL'] },
  { icon: Braces, number: '04', title: 'Programming languages', description: 'Practising programming fundamentals, syntax, and problem-solving.', tags: ['Python', 'C', 'C++', 'Java'] },
  { icon: GitBranch, number: '05', title: 'Development tools', description: 'Getting familiar with version control and everyday developer workflows.', tags: ['Git', 'GitHub', 'Visual Studio Code'] },
]

export default function Skills() {
  return (
    <section className="content-section section-wrap" id="skills">
      <SectionHeading index="03" eyebrow="TOOLS I’M EXPLORING" title={<>A growing<br /><span>toolkit.</span></>} description="Technologies I’ve studied or am exploring as I build my computer science foundation. I focus on understanding the fundamentals and practising what I learn." />
      <div className="skill-grid">
        {groups.map(({ icon: Icon, number, title, description, tags }, index) => (
          <Reveal className={`skill-card${index === 0 ? ' skill-card--feature' : ''}`} delay={index * 0.045} key={title}>
            <div className="skill-card__top"><span className="skill-card__icon"><Icon size={19} /></span><span>{number}</span></div>
            <h3>{title}</h3>
            <p className="skill-card__description">{description}</p>
            <div className="skill-tags">{tags.map((tag) => <span key={tag}><i />{tag}</span>)}</div>
          </Reveal>
        ))}
        <Reveal className="skill-note" delay={0.18}>
          <Layers3 size={20} />
          <p>Student toolkit.<br /><span>Learning the foundations, one subject at a time.</span></p>
          <span className="skill-note__mark">LEARNING IN PROGRESS</span>
        </Reveal>
      </div>
    </section>
  )
}