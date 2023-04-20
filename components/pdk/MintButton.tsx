import Image from 'next/image'
import Button from './Button'

import iconDevil from './assets/icon/devil.png'
import iconDevilDisabled from './assets/icon/devil_disabled.png'

import textMint from './assets/text/mint.png'
import textMy from './assets/text/my.png'
import textDestruction from './assets/text/destruction.png'

import textMintDisabled from './assets/text/mint_disabled.png'
import textMyDisabled from './assets/text/my_disabled.png'
import textDestructionDisabled from './assets/text/destruction_disabled.png'

export type MintButtonProps = React.ComponentPropsWithoutRef<"button">

export default function MintButton({disabled, ...props}: MintButtonProps) {
  return (
    <Button className="px-[62.5px] py-[25px]" {...props} disabled={disabled}>
      <Image className="m-auto mb-[7px]" src={disabled ? iconDevilDisabled : iconDevil} alt="Devil icon" />
      <div className="flex flex-wrap gap-[10px] justify-center ">
        {disabled ? (
          <>
            <Image className="max-w-none" src={textMintDisabled} alt="Mint" />
            <Image className="max-w-none" src={textMyDisabled} alt="My" />
            <Image className="max-w-none" src={textDestructionDisabled} alt="Destruction" />
          </>
        ) : (
          <>
            <Image className="max-w-none" src={textMint} alt="Mint" />
            <Image className="max-w-none" src={textMy} alt="My" />
            <Image className="max-w-none" src={textDestruction} alt="Destruction" />
          </>
        )}
      </div>
    </Button>
  )
}

