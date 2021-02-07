import { deep, swiss } from '@theme-ui/presets'

const prismLight = {
  comment: '#708090',
  punctuation: '#999999',
  baseToken: '#990055',
  secondaryToken: '#dd4a68',
  string: '#669900',
  operator: '#9a6e3a',
  keyword: '#0077aa',
  regex: '#ee9900',
  deleted: 'rgba(255, 0, 0, .1)',
  inserted: 'rgba(0, 255, 128, .1)',
  builtin: '#009999',
}

const prismDark = {
  comment: '#5C6370',
  punctuation: '#abb2bf',
  baseToken: '#e06c75',
  secondaryToken: '#61afef',
  string: '#98c379',
  operator: '#56b6c2',
  keyword: '#c678dd',
  regex: '#c678dd',
  deleted: '#d19a66',
  inserted: '#98c379',
  builtin: '#98c379',
}

const lightTheme = {
  ...swiss.colors,
  muted: '#ebe4e0',
  background: '#f3f3f1',

  ...prismLight,
}

const darkTheme = {
  ...deep.colors,
  text: '#ebebeb',
  background: '#3a3c45',
  muted: '#343541',
  primary: '#ef8354',
  secondary: '#dc6976',

  ...prismDark,
}

export const colors = {
  useColorSchemeMediaQuery: true,
  ...darkTheme,
  modes: {
    burningEyes: lightTheme,
  },
}
