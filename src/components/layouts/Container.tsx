import type { ReactNode } from 'react'
import React from 'react'

type ContainerProps = {
  children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container mx-auto max-w-xs bg-slate-50 px-4">
      {children}
    </div>
  )
}

export default Container
