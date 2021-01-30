type Typography = {
  __type: 'typography'
}

declare module 'typography-theme-github' {
  const typo: Typography
  export default typo
}

declare module '@theme-ui/typography' {
  import { Theme } from 'theme-ui'

  export const toTheme: (typography: Typography) => Theme
}

declare module '@theme-ui/presets' {
  import { Theme } from 'theme-ui'

  export const swiss: Theme
}
