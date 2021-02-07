import { prism } from './prism'

export const styles = {
  root: {
    margin: 0,
    fontFamily: `body`,
    lineHeight: 1,
    fontFeatureSettings: `'kern', 'calt', 'ss01', 'ss02', 'ss03'`,
    minHeight: `100%`,
  },
  p: {
    margin: 0,
    marginBottom: 2,
    '& > img': {
      marginBottom: 0,
    },
  },
  a: {
    color: `primary`,
    textDecoration: `none`,
    WebkitTapHighlightColor: `transparent`,
    transition: 'all .25s ease-in-out',
    '&:hover': {
      color: `secondary`,
    },
  },
  button: {
    variant: `text.display`,
  },
  h1: {
    variant: `text.display`,
    fontSize: 5,
    marginTop: 0,
    marginBottom: 5,
  },
  h2: {
    variant: `text.heading`,
    fontSize: 4,
  },
  h3: {
    variant: `text.heading`,
    fontSize: 3,
  },
  h4: {
    variant: `text.heading`,
    fontSize: 2,
  },
  h5: {
    variant: `text.heading`,
    fontSize: 1,
  },
  h6: {
    variant: `text.heading`,
    fontSize: 0,
  },
  img: {
    marginBottom: 4,
    maxWidth: `100%`,
    height: `auto`,
  },
  pre: {
    variant: `text.code`,
    // marginBottom: 4,
    color: `secondary`,
    bg: `muted`,
    overflowX: `auto`,
  },
  code: {
    variant: `text.code`,
    // paddingX: 4,
    // paddingY: 3,
    color: `text`,
    ...prism,
  },
  '.token-line': {
    paddingX: 45,
  },
  inlineCode: {
    variant: `text.code`,
    color: `primary`,
    backgroundColor: `muted`,
    display: 'inline',
    paddingX: 2,
  },
  ol: {
    marginTop: 0,
    marginBottom: 4,
    paddingLeft: 4,
  },
  ul: {
    marginTop: 0,
    marginBottom: 4,
    paddingLeft: 4,
    listStyleType: `square`,
  },
  li: {
    '& > ul, & > ol': {
      marginBottom: 0,
    },
  },
  blockquote: {
    paddingLeft: 4,
    marginY: 4,
    marginX: 3,
    borderWidth: 0,
    borderLeftWidth: 3,
    borderColor: `primary`,
    borderStyle: `solid`,
    display: `flex`,
    flexDirection: `column`,
    '& > p': {
      marginBottom: 0,
    },
    '& > cite': {
      marginTop: 4,
      alignSelf: `flex-end`,
    },
  },
  hr: {
    color: `primary`,
    border: 0,
    borderBottomWidth: 2,
    borderStyle: `solid`,
    width: `66%`,
    marginY: 5,
    marginX: 'auto',
  },
  i: {
    variant: `text.italic`,
  },
  em: {
    variant: `text.italic`,
  },
  b: {
    variant: `text.bold`,
  },
  strong: {
    variant: `text.bold`,
  },
  table: {
    width: `100%`,
    marginBottom: 4,
    borderCollapse: `separate`,
    borderSpacing: 0,
  },
  th: {
    textAlign: `left`,
    verticalAlign: `bottom`,
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 1,
    paddingLeft: 0,
    borderColor: `inherit`,
    borderBottomWidth: 2,
    borderBottomStyle: `solid`,
  },
  td: {
    textAlign: `left`,
    verticalAlign: `top`,
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 1,
    paddingLeft: 0,
    borderColor: `inherit`,
    borderBottomWidth: 1,
    borderBottomStyle: `solid`,
  },
}
