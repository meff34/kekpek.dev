import React from 'react'
import { Link } from './Link'
import { Link as ThemeUiLink, LinkProps as ThemeUiLinkProps } from '@theme-ui/components'

type IsomorphicLinkProps = ThemeUiLinkProps

const isExternalLink = (href: string) => href.startsWith('http')

export const IsomorphicLink = ({ href, children, ...props }: IsomorphicLinkProps) => {
  if (!href) return <span>{children}</span>

  if (isExternalLink(href))
    return (
      <ThemeUiLink href={href} {...props} target="_blank" rel="noreferrer">
        {children}
      </ThemeUiLink>
    )

  return <Link to={href}>{children}</Link>
}
