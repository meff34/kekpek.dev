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

  export const base: Theme
  export const dark: Theme
  export const deep: Theme
  export const funk: Theme
  export const future: Theme
  export const roboto: Theme
  export const swiss: Theme
  export const system: Theme
  export const tosh: Theme
  export const bootstrap: Theme
  export const bulma: Theme
  export const polaris: Theme
  export const tailwind: Theme
}

declare module 'gatsby-plugin-mdx/mdx-renderer' {
  import { FC } from 'react'
  const MDXRenderer: FC
  export default MDXRenderer
}

declare module '@theme-ui/prism' {
  import { FC } from 'react'
  const Prism: FC
  export default Prism
}

declare module '*.woff2' {
  const font: string
  export default font
}
