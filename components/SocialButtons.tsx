import {
  AiFillCode, AiFillExperiment, AiFillGithub, AiFillHeart, AiFillMail, AiFillPicture, AiFillProfile,
  AiFillStar, AiFillTool, AiFillTrophy, AiFillTwitterCircle,
} from 'react-icons/ai'
import { ButtonProps } from 'types'
import { SocialButton } from '@components/SocialButton'


const twitterIcon: ButtonProps = {
  text: 'Twitter',
  label: 'Twitter link',
  href: 'https://twitter.com/OHulter',
  icon: <AiFillTwitterCircle />,
}
const linkedinIcon = {
  text: 'LinkedIn',
  label: 'LinkedIn link',
  href: 'https://www.linkedin.com/in/oskar-hulter',
  icon: <AiFillProfile />
}
const mailIcon = {
  text: 'Mail',
  label: 'Mail link',
  href: 'mailto:oskarhulter@gmail.com',
  icon: <AiFillMail />
}
const githubIcon = {
  text: 'Github',
  label: 'Github link',
  href: 'https://github.com/OskarHulter',
  icon: <AiFillGithub />
}
const heartIcon = {
  text: 'Heart',
  label: 'Heart link',
  href: 'https://github.com/OskarHulter',
  icon: <AiFillHeart/>
}
const starIcon = {
  text: 'Star',
  label: 'Star link',
  href: 'https://github.com/OskarHulter',
  icon: <AiFillStar/>
}
const toolIcon = {
  text: 'Tool',
  label: 'Tool link',
  href: 'https://github.com/OskarHulter',
  icon: <AiFillTool/>
}
const trophyIcon = {
  text: 'Trophy',
  label: 'Trophy link',
  href: 'https://github.com/OskarHulter',
  icon: <AiFillTrophy/>
}
const experimentIcon = {
  text: 'Experiment',
  label: 'Experiment link',
  href: 'https://github.com/OskarHulter',
  icon: <AiFillExperiment/>
}

const codeIcon = {
  text: 'Code',
  label: 'Code link',
  href: 'https://github.com/OskarHulter',
  icon: <AiFillCode/>
}
const pictureIcon = {
  text: 'Picture',
  label: 'Picture link',
  href: 'https://github.com/OskarHulter',
  icon: <AiFillPicture/>
}
const allIcons: ButtonProps[] = [
  githubIcon,
  twitterIcon,
  linkedinIcon,
  mailIcon,
  heartIcon,
  starIcon,
  toolIcon,
  trophyIcon,
  experimentIcon,
  codeIcon,
  pictureIcon,
]

export const socialButtons: ButtonProps[] = [
  githubIcon,
  twitterIcon,
  linkedinIcon,
  mailIcon,
]

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
