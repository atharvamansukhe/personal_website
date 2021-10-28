import { IconType } from 'react-icons'
import {
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiGraphql,
  SiApollographql,
  SiFirebase,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiStyledcomponents,
  SiVuedotjs,
  SiDocker,
  SiGooglecloud,
  SiCpanel,
  SiGitlab,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiMaterialui,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
    {
      name: 'Node',
      icon: SiNodedotjs,
    },
    {
      name: 'Express',
      icon: SiExpress,
    },
  ],
  frontend: [
    {
      name: 'ReactJS',
      icon: SiReact,
    },
    {
      name: 'NextJS',
      icon: SiNextdotjs,
    },
    {
      name: 'Redux',
      icon: SiRedux,
    },
  ],
  database: [
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'Firebase',
      icon: SiFirebase,
    },
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'CPanel',
      icon: SiCpanel,
    },
  ],
  'ui frameworks': [
    {
      name: 'Styled Components',
      icon: SiStyledcomponents,
    },
    {
      name: 'MaterialUI',
      icon: SiMaterialui,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
    {
      name: 'ChakraUI',
      icon: BsQuestionSquare,
    },
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 3 && arrLength > 1) {
    chunk = 2
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
