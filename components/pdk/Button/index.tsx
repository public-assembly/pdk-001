import styles from './styles.module.css'
import clsx from 'clsx'

export type ButtonProps = React.ComponentPropsWithoutRef<"button">

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button className={clsx(styles.btn, className, "select-none")} {...props}>
      {/* div used to shift contents when clicked */}
      <div className={clsx(styles.btnBody, "pointer-events-none")}>{children}</div>
    </button>
  )
} 
