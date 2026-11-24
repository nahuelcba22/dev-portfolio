import { useTheme } from '../../hooks/useTheme'

/** Visible switch: the accessible (and mobile) alternative to clicking the lamp. */
export default function ThemeToggle() {
  const { isNight, toggle } = useTheme()

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isNight}
      onClick={toggle}
      className="pointer-events-auto fixed bottom-4 right-4 z-20 flex cursor-pointer items-center gap-3 border-2 border-line bg-panel px-3 py-2 text-sm text-ink shadow-[4px_4px_0_0_var(--line)] backdrop-blur-md transition-colors duration-1000 outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <span>{isNight ? 'Noche' : 'Día'}</span>
      <span aria-hidden="true" className="relative h-4 w-8 border-2 border-line">
        <span
          className={`absolute top-0 size-3 bg-accent transition-all duration-300 ${
            isNight ? 'left-4' : 'left-0'
          }`}
        />
      </span>
    </button>
  )
}
