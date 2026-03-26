import type { CSSProperties, ReactNode } from 'react'

type GridLayoutProps = {
  children: ReactNode
  columns?: number
  rowHeight?: number
  gap?: number
  className?: string
}

export default function GridLayout({
  children,
  columns = 12,
  rowHeight = 80,
  gap = 16,
  className,
}: GridLayoutProps) {
  const style: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridAutoRows: `${rowHeight}px`,
    gap: `${gap}px`,
  }

  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
