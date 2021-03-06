import { SocialButton } from '@components/SocialButton'
import { socialButtons } from '@constants'


export function SocialButtons() {

  return <>
    {socialButtons.map(({ text, label, href, Icon }, key) =>
      <SocialButton
        text={text}
        label={label}
        href={href}
        Icon={Icon}
        key={key}
      />
    )}
  </> 
}
