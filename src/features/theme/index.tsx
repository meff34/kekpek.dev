import React, { ReactNode } from 'react'

import deepmerge from 'deepmerge'
import { ThemeProvider } from 'theme-ui'

import { toTheme } from '@theme-ui/typography'
import typography from 'typography-theme-github'
import { swiss as colorTheme } from '@theme-ui/presets'

const typographyTheme = toTheme(typography)

const theme = deepmerge(colorTheme, typographyTheme)

export const Theme = ({ children }: { children: ReactNode }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
