import OriginalPrism from '@theme-ui/prism'
import styled from '@emotion/styled'
import { Pre } from '../features/components/Pre'

const Prism = styled(OriginalPrism)`
  overflow-x: auto;
`
const components = {
  pre: Pre,
  code: Prism,
}

// eslint-disable-next-line import/no-default-export
export default components
