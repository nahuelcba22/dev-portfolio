import { useTheme } from './hooks/useTheme'

// Temporary view to verify the theme system. Replaced by the real layout later.
export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <main className="min-h-dvh bg-[#c9dcf2] p-6 font-body text-ink transition-colors duration-1000 dark:bg-[#0d1020]">
      <section className="max-w-md border-2 border-line bg-panel p-5 shadow-[4px_4px_0_0_var(--line)] transition-colors duration-1000">
        <h1 className="font-display text-3xl font-bold">Portfolio</h1>
        <p className="mt-2 text-muted">Theme: {theme}</p>
        <button
          type="button"
          onClick={toggle}
          className="mt-4 cursor-pointer border-2 border-line px-3 py-1 text-accent outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Toggle theme
        </button>
      </section>
    </main>
  )
}
