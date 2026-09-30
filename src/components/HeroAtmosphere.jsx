const particles = [
  { top: '18%', left: '62%', delay: '0s' },
  { top: '32%', left: '78%', delay: '1.2s' },
  { top: '58%', left: '70%', delay: '2.4s' },
  { top: '72%', left: '84%', delay: '0.6s' },
  { top: '24%', left: '90%', delay: '3s' },
  { top: '46%', left: '58%', delay: '1.8s' },
]

export default function HeroAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(141,124,186,0.22),transparent_68%)] md:h-[36rem] md:w-[36rem]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(243,243,245,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(243,243,245,0.05) 1px, transparent 1px)',
          backgroundSize: '88px 88px',
          maskImage: 'linear-gradient(to left, black, transparent 72%)',
        }}
      />
      {particles.map((particle) => (
        <span
          key={`${particle.top}-${particle.left}`}
          className="particle absolute hidden h-1 w-1 rounded-full bg-paper md:block"
          style={{ top: particle.top, left: particle.left, animationDelay: particle.delay }}
        />
      ))}
    </div>
  )
}
