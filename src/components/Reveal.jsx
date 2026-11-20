import { motion } from 'framer-motion'

export function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div className="section-heading__meta">
        <span className="section-index">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <div className="section-heading__body">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}