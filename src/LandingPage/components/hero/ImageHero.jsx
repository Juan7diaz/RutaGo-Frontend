import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const URL_IMAGE = 'https://pbs.twimg.com/media/E8_rlNUX0AUWXZ6.jpg:large'

const ImageHero = () => {
  return (
    <Box
    position={'relative'}
    height={'300px'}
    rounded={'2xl'}
    boxShadow={'2xl'}
    width={'full'}
    overflow={'hidden'}
  >
    <Image
      alt={'Hero Image'}
      align={'center'}
      w={'100%'}
      h={'100%'}
      src={URL_IMAGE}
    />
  </Box>
  )
}

export default ImageHero
