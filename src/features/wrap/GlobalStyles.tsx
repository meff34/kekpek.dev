import React from 'react'
import { Global } from '@emotion/core'
import { jetBrainsFontFaces } from '../../gatsby-plugin-theme-ui/fontFaces'

const styles = jetBrainsFontFaces

export const GlobalStyles = () => <Global styles={styles} />
