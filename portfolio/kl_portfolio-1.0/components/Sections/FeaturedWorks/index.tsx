import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
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
        my projects
      </Heading>
      <Text variant="description">
        Check out some of my projects I created while freelancing and working.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Oxpro Pharma"
            src="/works/oxpro.png"
            description="Product website and homepage for a pharmaceutical company based in India. I designed and developed the whole theme with accordance with the client."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://oxpropharma.in/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Devely"
            description="Designed and developed the main website for devely.in. It is customized for ease of access and user experience."
            src="/works/devely.jpg"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://devely.in"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Yelp Camp"
            description="A fullstack project which showcases camping spots around the country. Made using Express js and MongoDB."
            src="/works/yelp.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://cryptic-brook-22844.herokuapp.com/campgrounds"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
