import React, { ReactNode } from 'react'
import { GlobalStyles } from './GlobalStyles'

export const wrapRootElement = ({ element }: { element: ReactNode }) => (
  <>
    <GlobalStyles />
    {element}
  </>
)
