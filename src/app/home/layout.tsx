import React from 'react'

export default function Layout ({ children }: {children: React.ReactNode}) {
  return (
    <body>
      <div>My layout</div>
      {children}
    </body>
  )
}
