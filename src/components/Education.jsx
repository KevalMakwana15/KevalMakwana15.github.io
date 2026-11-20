import { GraduationCap } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'

const education = [
  { number: '01', level: "BACHELOR'S DEGREE", state: 'CURRENTLY PURSUING', school: 'JG University', degree: 'B.Tech in Computer Science and Engineering', detail: '2nd Year', current: true },
  { number: '02', level: 'DIPLOMA', state: 'COMPLETED', school: 'LJ University', degree: 'Diploma in Engineering', detail: 'Specialization · Information Technology', current: false },
]

export default function Education() {
  return (
    <section className="content-section content-section--alt" id="education">
      <div className="section-wrap">
        <SectionHeading index="02" eyebrow="THE LEARNING SO FAR" title={<>Every step adds<br /><span>another layer.</span></>} description="My education is where a lasting interest in technology became a direction." />
        <div className="education-timeline">
          {education.map((item) => (
            <Reveal className={`education-entry${item.current ? ' education-entry--current' : ''}`} key={item.number}>
              <div className="timeline-marker"><GraduationCap size={19} /></div>
              <span className="education-entry__number">{item.number}</span>
              <article className="education-card">
                <div className="education-card__meta"><span>{item.level}</span><span className="education-status"><i />{item.state}</span></div>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <div className="education-card__detail">{item.detail}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}