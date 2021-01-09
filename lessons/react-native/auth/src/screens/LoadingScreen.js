import React, { useEffect } from 'react'
import { Spinner } from '../components/common'
import useInitAuth from '../hooks/useInitAuth'

const LoadingScreen = () => {
  useEffect(() => useInitAuth(), []);

  return <Spinner />
}

export default LoadingScreen;