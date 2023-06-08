import { PDKImage, PDKImageProps } from './PDKImage'
import clsx from "clsx"

export type PDKTextProps = PDKImageProps

export function PDKText({ className, ...props }: PDKTextProps) {
  return (
    <PDKImage className={clsx(className, "max-w-none")} {...props} />
  )
}

export default PDKText
