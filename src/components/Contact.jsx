import { Github, Linkedin, Mail } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'

export default function Contact() {
  return (
    <section className="content-section content-section--contact" id="contact">
      <div className="section-wrap">
        <SectionHeading index="06" eyebrow="START A CONVERSATION" title={<>Let’s connect<span>.</span></>} description="Have a question, an idea, or just want to talk tech? I’d be glad to hear from you." />
        <div className="contact-layout">
          <Reveal className="contact-details">
            <div className="contact-details__intro">
              <p className="contact-details__lead">Good things start with a hello.</p>
              <p className="contact-details__hint">Choose a contact method below to connect with me.</p>
            </div>
            <div className="contact-channels">
              <a className="contact-placeholder contact-placeholder--email" href="mailto:makwanakeval1098@gmail.com"><Mail size={19} /><div><span>EMAIL</span><strong>makwanakeval1098@gmail.com</strong></div></a>
              <a className="contact-placeholder" href="https://www.linkedin.com/in/keval-makwana-a7840b423" target="_blank" rel="noreferrer"><Linkedin size={19} /><div><span>LINKEDIN</span><strong>KevalMakwana</strong></div></a>
              <a className="contact-placeholder" href="https://github.com/KevalMakwana15" target="_blank" rel="noreferrer"><Github size={19} /><div><span>GITHUB</span><strong>KevalMakwana15</strong></div></a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}