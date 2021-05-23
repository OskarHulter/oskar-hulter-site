import React, { FC } from 'react'
import { CircularProgress } from '@chakra-ui/react'

const Loading: FC = () =>
  <CircularProgress isIndeterminate color="green.300" />

export default Loading