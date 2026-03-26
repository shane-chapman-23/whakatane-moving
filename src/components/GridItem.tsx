import type { CSSProperties, ReactNode } from 'react'

type GridItemProps = {
  children: ReactNode
  colSpan?: number
  rowSpan?: number
  colStart?: number
  rowStart?: number
  className?: string
}

export default function GridItem({
  children,
  colSpan = 1,
  rowSpan = 1,
  colStart,
  rowStart,
  className,
}: GridItemProps) {
  const style: CSSProperties = {
    gridColumn: colStart
      ? `${colStart} / span ${colSpan}`
      : `span ${colSpan} / span ${colSpan}`,
    gridRow: rowStart ? `${rowStart} / span ${rowSpan}` : `span ${rowSpan} / span ${rowSpan}`,
    minHeight: 0,
  }

  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
