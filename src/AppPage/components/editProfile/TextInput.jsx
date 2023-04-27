import React from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

// eslint-disable-next-line react/display-name
const TextInput = React.forwardRef((props, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input ref={ref} id={props.id} {...props} />
    </FormControl>
  )
})

export default TextInput
