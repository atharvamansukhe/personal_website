import { memo } from 'react'
import { Heading, Text, Stack, Link, Icon, Box } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { RiHeartPulseFill, RiGithubFill } from 'react-icons/ri'

const GetInTouch = () => {
  const [ref, inView] = useInView()
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Say hi!{' '}
      </Heading>
      <Text variant="description">
        Thank you for checking out my personal website!
        <br />
        If you&apos;re looking to hire me or work on freelance projects and
        collaborations, send me a message. Connect with me on Linkedin, Twitter,
        or just send me an{' '}
        <Link
          href="mailto:atharvamansukhe17@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          email
        </Link>
        .
      </Text>

      <Box
        spacing={0.5}
        textAlign="center"
        fontFamily="monospace"
        paddingTop={{ base: 10, lg: 20, xl: 20 }}
        paddingBottom={{ base: 5, lg: 18 }}
      >
        <Link
          variant="description"
          textDecoration="none"
          rel="noreferrer"
          href="https://github.com/atharvamansukhe"
          target="_blank"
          _focus={{ boxShadow: 'none' }}
        >
          <Text as="span">
            <Icon as={RiGithubFill} h={6} w={6} /> <br />
            Designed and Made with <Icon as={RiHeartPulseFill} /> <br />
            Atharva Mansukhe &copy; 2021
          </Text>
        </Link>
      </Box>
    </Stack>
  )
}

export default memo(GetInTouch)
