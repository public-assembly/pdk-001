import PDKText from './PDKText'
import Button from './Button'

import { IconDevil } from './Icon'

import textMint from './assets/text/mint.png'
import textMy from './assets/text/my.png'
import textDestruction from './assets/text/destruction.png'

import textMintDisabled from './assets/text/mint_disabled.png'
import textMyDisabled from './assets/text/my_disabled.png'
import textDestructionDisabled from './assets/text/destruction_disabled.png'

export type MintButtonProps = React.ComponentPropsWithoutRef<"button">

export default function MintButton({ disabled, ...props }: MintButtonProps) {
  return (
    <Button className="px-[31.25px] py-[12.5px]" {...props} disabled={disabled}>
      <IconDevil className="m-auto mb-[3.5px]" disabled={disabled} />
      <div className="flex flex-wrap gap-[5px] justify-center ">
        {disabled ? (
          <>
            <PDKText image={textMintDisabled} alt="Mint" />
            <PDKText image={textMyDisabled} alt="My" />
            <PDKText image={textDestructionDisabled} alt="Destruction" />
          </>
        ) : (
          <>
            <PDKText image={textMint} alt="Mint" />
            <PDKText image={textMy} alt="My" />
            <PDKText image={textDestruction} alt="Destruction" />
          </>
        )}
      </div>
    </Button>
  )
}
