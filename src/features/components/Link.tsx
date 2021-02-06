import React, { ReactNode } from 'react'
import { Link as ThemeUiLink, LinkProps as ThemeUiLinkProps } from '@theme-ui/components'
import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby'

type LinkProps = {
  children: ReactNode
  to: GatsbyLinkProps<never>['to']
}

const PatchedGatsbyLink = ({ href, className, children, ...props }: ThemeUiLinkProps) => (
  <GatsbyLink className={className} to={href ?? '/'}>
    {children}
  </GatsbyLink>
)

export const Link = ({ children, to }: LinkProps) => (
  <ThemeUiLink as={PatchedGatsbyLink} href={to}>
    {children}
  </ThemeUiLink>
)
