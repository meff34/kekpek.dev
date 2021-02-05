export const buttons = {
  primary: {
    color: `background`,
    backgroundColor: `primary`,
    cursor: `pointer`,
    '&:hover': {
      backgroundColor: `secondary`,
    },
  },
  icon: {
    height: `iconButton`,
    width: `iconButton`,
    cursor: `pointer`,
    color: `primary`,
    transition: `color 400ms ease`,
    '&:hover': {
      color: `secondary`,
    },
  },
  iconSvg: {
    height: `icon`,
    width: `icon`,
    fill: `currentColor`,
  },
}
