import { useEffect, useState, useContext } from 'react'
import { Button, ButtonGroup, Stack, useToast } from '@chakra-ui/react'
import TextInput from './TextInput'
import { updateUser } from '../../../services/userServices'
import AuthContext from '../../../context/auth/AuthContext'

const Form = ({ firstFieldRef, onCancel, defaultValue, label, keyDB, userID }) => {
  const [prevValue, setPrevValue] = useState('')
  const { updateSession } = useContext(AuthContext)
  const toats = useToast()

  useEffect(() => {
    setPrevValue(defaultValue)
  }, [defaultValue])

  const handleClickSave = async () => {
    const payload = { [keyDB]: firstFieldRef.current.value }

    const response = await updateUser(userID, payload)

    if (response.ok) {
      updateSession(response.user)
      onCancel()
    }

    console.log(response)

    toats({
      title: response.ok ? 'Enhorabuena' : 'Error',
      description: response.message,
      status: response.ok ? 'success' : 'error',
      duration: 3000,
      position: 'bottom-right',
      isClosable: true
    })
  }

  const handleClickCancel = () => {
    onCancel()
    firstFieldRef.current.value = prevValue
  }

  return (
    <Stack spacing={4}>
      <TextInput
        label={label}
        ref={firstFieldRef}
        defaultValue={ defaultValue }
      />
      <ButtonGroup display='flex' justifyContent='flex-end'>
        <Button variant='outline' onClick={handleClickCancel}>
          Cancel
        </Button>
        <Button colorScheme='orange' onClick={handleClickSave}>
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  )
}

export default Form
