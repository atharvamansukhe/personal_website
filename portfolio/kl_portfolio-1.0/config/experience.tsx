import { Link } from '@chakra-ui/react'

export type Company = 'DEV'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  DEV: {
    name: 'Devely',
    longName: 'Devely LLP',
    subDetail: '',
    url: 'https://www.devely.in/',
    position: 'Co-Founder',
    duration: 'Sept 2021 - Present',
    logo: {
      light: '/worked_at_logos/dev/devely_logo.jpg',
      dark: '/worked_at_logos/dev/devely_logo.jpg',
    },
    roles: [
      <>
        Created and pioneered the technical aspects of the company, which
        includes website management, software integrations, prioritizing the
        user experience and customer support.
      </>,
      <>Implemented time management and scheduling into the daily workflow.</>,
      <>Designed the main site and strive to improve it whenever possible.</>,
      <>
        Improvised on certain aspects and shifted strategies to meet challenges.
      </>,
      <>
        Accountable for the yearly turnover of the business, and therefore
        implemented important policies.
      </>,
    ],
  },
}

export const ExperiencesList = [Experiences.DEV]
