import {
  AiFillCode, AiFillExperiment, AiFillGithub, AiFillHeart, AiFillHome, AiFillMail, AiFillPicture,
  AiFillProfile, AiFillStar, AiFillTool, AiFillTrophy, AiFillTwitterCircle,
} from 'react-icons/ai'
import { SocialButton } from '@components/SocialButton'


const twitterIcon = {
  href: 'https://twitter.com/OHulter',
  icon: <AiFillTwitterCircle />
}
const linkedinIcon = {
  href: 'https://www.linkedin.com/in/oskar-hulter',
  icon: <AiFillProfile />
}
const mailIcon = {
  href: 'mailto:oskarhulter@gmail.com',
  icon: <AiFillMail />
}
const githubIcon = {
  href: 'https://github.com/OskarHulter',
  icon: <AiFillGithub />
}
const heartIcon = {
  href: 'https://github.com/OskarHulter',
  icon: <AiFillHeart/>
}
const starIcon = {
  href: 'https://github.com/OskarHulter',
  icon: <AiFillStar/>
}
const toolIcon = {
  href: 'https://github.com/OskarHulter',
  icon: <AiFillTool/>
}
const trophyIcon = {
  href: 'https://github.com/OskarHulter',
  icon: <AiFillTrophy/>
}
const experimentIcon = {
  href: 'https://github.com/OskarHulter',
  icon: <AiFillExperiment/>
}
const homeIcon = {
  href: 'https://github.com/OskarHulter',
  icon: <AiFillHome/>
}
const codeIcon = {
  href: 'https://github.com/OskarHulter',
  icon: <AiFillCode/>
}
const pictureIcon = {
  href: 'https://github.com/OskarHulter',
  icon: <AiFillPicture/>
}

const icons: Icon[] = [
  githubIcon,
  twitterIcon,
  linkedinIcon,
  mailIcon
]

export function SocialButtons() {

  return <>
    {icons.map((icon, key) =>
      <SocialButton icon={icon} key={key} />
    )}
  </> 
}

  
  
export type Icon = {
  href: string
  icon: JSX.Element
}
