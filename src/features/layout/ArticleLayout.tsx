import React, { ReactNode } from 'react'
import { BaseLayout } from './BaseLayout'

export const ArticleLayout = ({ children }: { children: ReactNode }) => (
  <BaseLayout>
    <>{children}</>
  </BaseLayout>
)
