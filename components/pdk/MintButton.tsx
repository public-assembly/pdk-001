import Image from 'next/image'
import { Button } from './Button'

import iconDevil from './assets/icon-devil.png'
import textMintMyDestruction from './assets/text-mint-my-destruction.png'

import iconDevilDisabled from './assets/icon-devil_disabled.png'
import textMintMyDestructionDisabled from './assets/text-mint-my-destruction_disabled.png'


export type MintButtonProps = React.ComponentPropsWithoutRef<"button">

export default function MintButton({disabled, ...props}: MintButtonProps) {
  return (
    <Button className="px-[62.5px] py-[25px]" {...props} disabled={disabled}>
      <Image className="m-auto mb-[7px]" src={disabled ? iconDevilDisabled : iconDevil} alt="Devil icon" />
      <Image className="m-auto" src={disabled ? textMintMyDestructionDisabled : textMintMyDestruction} alt="Mint My Destruction" />
    </Button>
  )
}

