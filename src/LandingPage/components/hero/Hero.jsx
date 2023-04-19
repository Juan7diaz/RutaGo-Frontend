import {
  Container,
  Stack,
  Flex
} from '@chakra-ui/react'
import Blob from './Blob'
import ButtonHero from './ButtonHero'
import { HeroDescription } from './HeroDescription'
import ImageHero from './ImageHero'

export default function Hero () {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 18, md: 10 }}
        py={{ base: 28, md: 40 }}
        pb={{ base: 28, md: 32 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 10, md: 10 }}>
          <HeroDescription />
          <ButtonHero />
        </Stack>
        <Flex
          flex={0.8}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Blob />
          <ImageHero />
        </Flex>
      </Stack>
    </Container>
  )
}
