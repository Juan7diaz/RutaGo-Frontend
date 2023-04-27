import {
  Box,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { useRef } from 'react'
import Form from './Form'
import { AiOutlineEdit } from 'react-icons/ai'

const PopoverForm = ({ label, data, empty = false, keyDB, userID }) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = useRef(null)

  return (
    <>
      <Box display="inline-block" mr={3} pt={4}>
        <Text fontSize="md" fontWeight="bold">
          {label}
        </Text>
        {data}
      </Box>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="bottom-start"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton size="sm" icon={<AiOutlineEdit />} />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <PopoverArrow />
          <PopoverCloseButton />
          <Form
            firstFieldRef={firstFieldRef}
            onCancel={onClose}
            defaultValue={ !empty ? data : ''}
            label={label}
            keyDB = {keyDB}
            userID = {userID}
          />
        </PopoverContent>
      </Popover>
    </>
  )
}

export default PopoverForm
