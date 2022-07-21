import { Box, Flex, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import './Movie.css';

function Movies() {
  const movieTitle = [
    'avengers',
    'captain america',
    'the martian',
    'ambulance',
    'annabelle',
    'batman',
    'superman',
    'immortal',
    'clash of the titans',
    'the witch',
    'oblivion',
  ];

  const MOVIE_API = `http://www.omdbapi.com/?apikey=1eb052a6&t=`;

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    movieTitle.forEach(t => {
      fetch(MOVIE_API + t)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setMovie(movie => [...movie, data]);
        });
    });
  }, []);
  console.log(movie);

  return (
    <>
      <Box
        display="flex"
        maxW="1440px"
        bg="#292929"
        color="white"
        h="140px"
        alignItems="center"
        justifyContent={{ base: 'center', md: 'center', lg: 'space-between' }}
        pl="77px"
      >
        <Box
          border="1px solid #ffff"
          w="193px"
          h="60px"
          letterSpacing="3px"
          textAlign="center"
        >
          <Text fontSize="4xl">My App </Text>
        </Box>
      </Box>

      {/* hero section */}

      <Box
        className="hero-background"
        display={'flex'}
        justifyContent={{ base: 'center', md: 'center', lg: 'left' }}
        alignItems="center"
        pl={{ lg: '77px' }}
        textAlign={{ base: 'center', lg: 'left' }}
      >
        <Text
          width={{ base: '273px', md: '490px', lg: '490px' }}
          fontSize={{ base: '28px', md: '72px', lg: '72px' }}
          fontWeight={700}
          fontFamily="sans-serif"
          color={'white'}
        >
          {' '}
          Watch Something Incredible
        </Text>
      </Box>
      <Box
        maxW={'100%'}
        ml={{ base: '28px', md: '77px', lg: '77px' }}
        mr={{ base: '28px', md: '77px', lg: '77px' }}
        mt={{ base: '33px', md: '63px', lg: '63px' }}
        p="0"
      >
        <Box w="100%">
          <Text mb="8px">Search:</Text>
          <Input size="sm" />
        </Box>

        <Flex
          w={'100%'}
          mt={{ base: '33px', md: '48px', lg: '48px' }}
          justify="center"
          gap={10}
          alignItems={'center'}
          p={'10px'}
          direction="row"
          wrap={'wrap'}
        >
          {movie.map((m, i) => (
            <Flex direction="column" key={i}>
              <>
                <Box mb={2}>{m.Genre}</Box>
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
              </>
            </Flex>
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default Movies;
