import {
  Stack,
  Container,
  Box,
  Flex,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import Details from './Details.jsx'
import Header from './Header.jsx'
import details from './details.js'

export default function StatsGridWithImage () {
  return (
    <Box
      bg={useColorModeValue('primary.light', 'primary.dark')}
      position={'relative'}
      id="#conocenos"
    >
      <Container maxW={'7xl'} zIndex={0} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 20, md: 100, xl: 100 }}
          >
            <Header />

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {details.map((detail, i) => (
                <Details
                  title={detail.title}
                  content={detail.content}
                  key={i}
                />
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  )
}
