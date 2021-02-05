export const text = {
  code: {
    fontFamily: `code`,
    color: 'secondary',
  },
  heading: {
    fontFamily: `heading`,
    fontWeight: `heading`,
    marginTop: 5,
    marginBottom: 3,
  },
  display: {
    variant: `text.heading`,
    color: `primary`,
  },
  italic: {
    fontStyle: `italic`,
    fontSynthesis: `none`,
    '@supports (font-variation-settings: normal)': {
      fontVariationSettings: `'slnt' -10`,
      fontStyle: `oblique 10deg`,
    },
  },
  bold: {
    fontWeight: `bold`,
    fontSynthesis: `none`,
  },
}
