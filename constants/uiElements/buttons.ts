// @ts-nocheck
import {
  AiFillCode, AiFillExperiment, AiFillGithub, AiFillHeart, AiFillHome, AiFillMail, AiFillPicture,
  AiFillProfile, AiFillStar, AiFillTool, AiFillTrophy, AiFillTwitterCircle,
} from 'react-icons/ai'
import { ButtonProps } from '@types'


const twitterIcon: ButtonProps = {
  text: 'Twitter',
  label: 'Twitter link',
  href: 'https://twitter.com/OHulter',
  Icon: AiFillTwitterCircle,
}
const linkedinIcon = {
  text: 'LinkedIn',
  label: 'LinkedIn link',
  href: 'https://www.linkedin.com/in/oskar-hulter',
  Icon: AiFillProfile,
}
const mailIcon = {
  text: 'Mail',
  label: 'Mail link',
  href: 'mailto:oskarhulter@gmail.com',
  Icon: AiFillMail,
}
const githubIcon = {
  text: 'Github',
  label: 'Github link',
  href: 'https://github.com/OskarHulter',
  Icon: AiFillGithub,
}
const heartIcon = {
  text: 'Heart',
  label: 'Heart link',
  href: 'https://github.com/OskarHulter',
  Icon: AiFillHeart,
}
const starIcon = {
  text: 'Star',
  label: 'Star link',
  href: 'https://github.com/OskarHulter',
  Icon: AiFillStar,
}
const toolIcon = {
  text: 'Tool',
  label: 'Tool link',
  href: 'https://github.com/OskarHulter',
  Icon: AiFillTool,
}
const trophyIcon = {
  text: 'Trophy',
  label: 'Trophy link',
  href: 'https://github.com/OskarHulter',
  Icon: AiFillTrophy,
}
const experimentIcon = {
  text: 'Experiment',
  label: 'Experiment link',
  href: 'https://github.com/OskarHulter',
  Icon: AiFillExperiment,
}

const codeIcon = {
  text: 'Code',
  label: 'Code link',
  href: 'https://github.com/OskarHulter',
  Icon: AiFillCode,
}
const pictureIcon = {
  text: 'Picture',
  label: 'Picture link',
  href: 'https://github.com/OskarHulter',
  Icon: AiFillPicture,
}

export const allIcons: ButtonProps[] = [
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

const aboutButton: ButtonProps = {
  text: 'About',
  label: 'About Page',
  href: '/about',
  Icon: AiFillStar, 
}

const homeButton: ButtonProps = {
  text: 'Home',
  label: 'Home link',
  href: '/',
  Icon: AiFillHome,
}

const blogButton: ButtonProps = {
  text: 'Blog',
  label: 'Blog Page',
  href: '/blog',
  Icon: AiFillCode, 
}

const contactButton: ButtonProps = {
  text: 'Contact',
  label: 'Contact Information',
  href: '/contact',
  Icon: AiFillMail, 
}

const portfolioButton: ButtonProps = {
  text: 'Portfolio',
  label: 'Portfolio nav link',
  href: '/portfolio',
  Icon: AiFillMail, 
}

export const navMenuButtons: ButtonProps[] = [
  homeButton,
  blogButton,
  aboutButton,
  contactButton,
  portfolioButton
]