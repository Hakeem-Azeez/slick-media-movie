import { border, Box, Flex } from '@chakra-ui/react';
import React from 'react';

function List({ movies, genre }) {
  return (
    <>
      {movies && (
        <Flex
          w={'100%'}
          overflowX="scroll"
          mt={{ base: '3px', md: '48px', lg: '48px' }}
          className="list"
          gap={2}
          p={'10px'}
          direction="row"
        >
          {movies?.map((m, i) => (
            <Box key={i}>
              {m.Genre.includes(genre) && (
                <Box w="300px" h="300px" position="relative">
                  <img className="poster" src={m.Poster} alt={m.Title} />
                  <Box
                    position="absolute"
                    top="50%"
                    left="100"
                    color={'white'}
                    fontSize="30px"
                  >
                    {m.Title}
                  </Box>
                </Box>
              )}
            </Box>
          ))}
        </Flex>
      )}
    </>
  );
}

export default List;
