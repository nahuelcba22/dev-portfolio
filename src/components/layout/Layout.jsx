import { NavLink, Outlet, useLocation } from 'react-router'
import { motion, useReducedMotion } from 'framer-motion'
import RoomBackground from './RoomBackground'
import ThemeToggle from './ThemeToggle'

const MotionMain = motion.main

const NAV = [
  { to: '/', label: 'Sobre mí', end: true },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Layout() {
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()

  return (
    <>
      <RoomBackground />

      {/*
        The wrapper does not capture clicks (pointer-events-none); only the panel does,
        so the center and the right side of the screen let clicks through to the
        background. On mobile the panel starts below the top 42% to leave the window visible.
      */}
      <div className="pointer-events-none relative z-10 min-h-dvh pt-[42dvh] lg:pt-0">
        <div className="pointer-events-auto border-2 border-line bg-panel text-ink shadow-[4px_4px_0_0_var(--line)] backdrop-blur-md transition-colors duration-1000 max-lg:min-h-[58dvh] max-lg:border-x-0 max-lg:border-b-0 lg:fixed lg:bottom-6 lg:left-6 lg:top-6 lg:w-[min(38rem,40vw)] lg:overflow-y-auto">
          <header className="sticky top-0 z-10 border-b-2 border-line bg-panel px-5 py-3 backdrop-blur-md">
            <p className="font-display text-lg">
              mariano@room:
              <span className="text-accent">~{pathname === '/' ? '' : pathname}</span>
            </p>
            <nav aria-label="Principal" className="mt-2 flex gap-5 text-sm">
              {NAV.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-accent ${
                      isActive ? 'text-accent underline' : 'text-muted'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </header>

          {/* The only animated moment: content fades in when the route changes */}
          <MotionMain
            key={pathname}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="px-5 py-6"
          >
            <Outlet />
          </MotionMain>
        </div>
      </div>

      <ThemeToggle />
    </>
  )
}
