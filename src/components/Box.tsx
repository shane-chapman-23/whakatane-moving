import type { CSSProperties, ReactNode } from 'react'

type BoxProps = {
  children: ReactNode
  bg?: string
  color?: string
  padding?: string | number
  rounded?: string | number
  border?: string
  shadow?: string
  className?: string
}

export default function Box({
  children,
  bg = 'var(--color-surface)',
  color = 'var(--color-text)',
  padding = '1rem',
  rounded = '1rem',
  border = '1px solid var(--color-border)',
  shadow = '0 16px 40px rgba(15, 23, 42, 0.08)',
  className,
}: BoxProps) {
  const style: CSSProperties = {
    background: bg,
    color,
    padding,
    borderRadius: rounded,
    border,
    boxShadow: shadow,
    height: '100%',
  }

  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
