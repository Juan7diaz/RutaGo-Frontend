import { FormControl, FormLabel, Input } from '@chakra-ui/react'

const InputForm = ({
  label,
  type,
  name,
  placeholder,
  value,
  onInputChange
}) => {
  return (
    <FormControl isRequired>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        _placeholder={{ opacity: 1, color: 'gray.500' }}
        value={value}
        onChange={onInputChange}
      />
    </FormControl>
  )
}

export default InputForm
