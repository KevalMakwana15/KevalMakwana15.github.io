import { Compass, Lightbulb, Music2, Sparkles, WandSparkles, Waypoints } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'

const hobbies = [
  { icon: Sparkles, label: 'Exploring new technologies' },
  { icon: Waypoints, label: 'Learning programming' },
  { icon: Lightbulb, label: 'Creative problem solving' },
  { icon: WandSparkles, label: 'Exploring AI tools' },
  { icon: Music2, label: 'Listening to music' },
  { icon: Compass, label: 'Travelling & exploring new places' },
]

export default function Hobbies() {
  return (
    <section className="content-section section-wrap hobbies-section" id="hobbies">
      <SectionHeading index="05" eyebrow="OFF THE SCREEN, TOO" title={<>A few things I<br /><span>make time for.</span></>} description="Small interests that keep me curious, refreshed, and open to new perspectives." />
      <Reveal className="hobby-strip">
        {hobbies.map(({ icon: Icon, label }, index) => (
          <div className="hobby-item" key={label}>
            <span className="hobby-item__index">0{index + 1}</span>
            <Icon size={20} />
            <span>{label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  )
}