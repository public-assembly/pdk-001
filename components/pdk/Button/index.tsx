import styles from './styles.module.css'

import clsx from 'clsx'

export type ButtonProps = React.ComponentPropsWithoutRef<"button">

export function Button({className, children, ...props}: ButtonProps) {
  return (
    <button className={clsx(styles.btn, className)} {...props}>
      {/* div used to shift contents when clicked */}
      <div>{children}</div>
    </button>
  )
} 
