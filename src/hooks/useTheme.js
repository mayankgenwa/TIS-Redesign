import { useCallback, useEffect, useState } from 'react'

const KEY = 'tis-theme'

/** Light/dark theme persisted to localStorage; the initial value is set by the inline script in index.html. */
export default function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'light',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      /* storage unavailable (private mode) — theme still works for the session */
    }
  }, [theme])

  const toggle = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    [],
  )

  return { theme, toggle }
}
