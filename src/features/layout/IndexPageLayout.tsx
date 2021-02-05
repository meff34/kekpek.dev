import React, { ReactNode } from 'react'
import { BaseLayout } from './BaseLayout'
import { Header } from '../header'

type LayoutProps = {
  children: ReactNode
}

export const IndexPageLayout = ({ children }: LayoutProps) => (
  <BaseLayout>
    <Header home />
    <>{children}</>
  </BaseLayout>
)
