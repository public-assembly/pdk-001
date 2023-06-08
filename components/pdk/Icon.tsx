import { PDKImage, PDKImageProps } from './PDKImage'

import iconDevil from './assets/icon/devil.png'
import iconDevilDisabled from './assets/icon/devil_disabled.png'

export function Icon({ className, ...props }: PDKImageProps) {
  return (
    <PDKImage {...props} />
  )
}

type IconProps = {
  disabled?: boolean;
  alt?: string;
} & Partial<Omit<PDKImageProps, "image">>

export function IconDevil({disabled, alt="Devil icon", ...props}: IconProps) {
  return (
    <PDKImage alt={alt} image={disabled ? iconDevilDisabled : iconDevil} {...props} />
  )
}

export default Icon
