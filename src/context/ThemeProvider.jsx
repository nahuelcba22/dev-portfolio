import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContext'

const STORAGE_KEY = 'portfolio-theme'

// The inline script in index.html already set (or not) the `dark` class before
// the first paint, so the DOM is the initial source of truth.
const getInitialTheme = () =>
  document.documentElement.classList.contains('dark') ? 'night' : 'day'

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'night')
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Private mode or blocked storage: persistence is not critical.
    }
  }, [theme])

  const toggle = useCallback(
    () => setTheme((current) => (current === 'night' ? 'day' : 'night')),
    [],
  )

  const value = useMemo(
    () => ({ theme, isNight: theme === 'night', toggle }),
    [theme, toggle],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
