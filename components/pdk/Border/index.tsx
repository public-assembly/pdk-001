import styles from './styles.module.css'
import clsx from 'clsx'

export type BorderProps = {
  className?: string
}

export default function Border({ className }: BorderProps) {
  return <div className={clsx(styles.border, className, "select-none")} />
} 

