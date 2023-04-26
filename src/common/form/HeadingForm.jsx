import { Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const HeadingForm = ({ title, subtile }) => {
  return (
    <Stack align={'center'}>
      <Heading fontSize={'4xl'} align={'center'}>
        {title}
      </Heading>
      <Text fontSize={'lg'} align={'center'}>
        {subtile}
      </Text>
    </Stack>
  )
}

export default HeadingForm
