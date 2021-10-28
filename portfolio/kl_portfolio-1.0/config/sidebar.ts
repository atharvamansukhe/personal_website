import { IconType } from 'react-icons'
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/athxrva',
    icon: FaTwitter,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/atharva_mansukhe/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/atharva-mansukhe-867188173/',
    icon: FaLinkedin,
  },

  {
    label: 'Github',
    href: 'https://github.com/atharvamansukhe',
    icon: FaGithub,
  },
]
