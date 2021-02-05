import { ReactNode } from 'react'
import Prism from '@theme-ui/prism'

const components = {
  pre: (props: { children: ReactNode }) => props.children,
  code: Prism,
}

// eslint-disable-next-line import/no-default-export
export default components
