type SectionTitleProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionTitle({ eyebrow, title, description, className = '' }: SectionTitleProps) {
  return (
    <div className={className}>
      <div className="premium-kicker">{eyebrow}</div>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">{description}</p> : null}
    </div>
  )
}
