import React, { FC } from 'react'
import { SocialButton } from '@components/SocialButton'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillExperiment } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai'
import { AiFillMail } from 'react-icons/ai'
import { AiFillCode } from 'react-icons/ai'
import { AiFillPicture } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { AiFillProfile } from 'react-icons/ai'
import { AiFillTool} from 'react-icons/ai'
import { AiFillTrophy} from 'react-icons/ai'


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

const SocialButtons: FC = () => 
  <>
    {icons.map((icon, key) =>
      <SocialButton icon={icon} key={key} />
    )}
  </>
  
export type Icon = {
  href: string
  icon: JSX.Element
}

export default SocialButtons
