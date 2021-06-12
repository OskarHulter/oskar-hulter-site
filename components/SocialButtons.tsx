import { SocialButton } from '@components/SocialButton'
import { socialButtons } from '@constants'


export function SocialButtons() {

  return <>
    {socialButtons.map(({ text, label, href, icon }, key) =>
      <SocialButton
        text={text}
        label={label}
        href={href}
        icon={icon}
        key={key}
      />
    )}
  </> 
}
