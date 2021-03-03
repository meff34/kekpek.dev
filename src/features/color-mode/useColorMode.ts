import { useColorMode as useThemeUiColorMode } from 'theme-ui'
import { useEffect } from 'react'

enum MODES {
  DARK = 'default',
  LIGHT = 'burningEyes',
}

const INIT_STORAGE_KEY = 'color-mode-has-been-initialized'

const checkInitializationStatus = () => sessionStorage.getItem(INIT_STORAGE_KEY)
const commitInitialization = () => sessionStorage.setItem(INIT_STORAGE_KEY, 'yep')

export const useColorToggle = () => {
  const [mode, setMode] = useThemeUiColorMode<MODES>()

  const isItLightMode = mode === MODES.LIGHT
  const toggle = () => setMode((mode) => (mode === MODES.LIGHT ? MODES.DARK : MODES.LIGHT))

  return [isItLightMode, toggle] as const
}

const matchMediaSupport = () => 'matchMedia' in window

export const useColorMode = () => {
  const [, setMode] = useThemeUiColorMode<MODES>()

  useEffect(() => {
    const isInitialized = checkInitializationStatus()
    if (isInitialized) return
    if (!matchMediaSupport()) return

    const initialMode = matchMedia('(prefers-color-scheme: dark)').matches ? MODES.DARK : MODES.LIGHT

    setMode(initialMode)

    commitInitialization()
  }, [setMode])

  useEffect(() => {
    if (!matchMediaSupport()) return
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      setMode(e.matches ? MODES.DARK : MODES.LIGHT)
    })
  }, [setMode])
}
