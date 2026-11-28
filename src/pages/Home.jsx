import { Link } from 'react-router'

const STACK = ['Node.js', 'Express', 'TypeScript', 'PostgreSQL']

const LINK_CLASS =
  'border-2 border-line px-3 py-1 text-accent outline-none hover:underline focus-visible:ring-2 focus-visible:ring-accent'

export default function Home() {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="font-display text-3xl font-bold">Nahuel Córdoba</h1>
        <p className="text-muted">Backend Developer</p>
      </header>

      <p className="leading-relaxed">
        Diseño APIs, modelo bases de datos y construyo la infraestructura que sostiene las
        aplicaciones, con foco en la consistencia y el rendimiento.
      </p>

      <div>
        <h2 className="mb-2 font-display text-lg text-accent">Stack</h2>
        <ul className="flex flex-wrap gap-2 text-sm">
          {STACK.map((item) => (
            <li key={item} className="border-2 border-line px-2 py-0.5">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <nav aria-label="Siguientes pasos" className="flex flex-wrap gap-3 text-sm">
        <Link to="/proyectos" className={LINK_CLASS}>
          Ver proyectos
        </Link>
        <Link to="/contacto" className={LINK_CLASS}>
          Contacto
        </Link>
      </nav>
    </section>
  )
}