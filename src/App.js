import React from 'react';
import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react';
import Movies from './components/Movies';


function App() {
  return (
    <ChakraProvider>
      <Movies/>
    </ChakraProvider>
  );
}

export default App;
