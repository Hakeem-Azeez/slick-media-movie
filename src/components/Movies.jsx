import { Box, Flex, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import List from './List';
import './Movie.css';

function Movies() {

  const movieTitle = [
  {
    genre: 'action', titles: ['avengers',
      'captain america', 'ambulance', 'batman',
      'superman',
      'immortal',
      'clash of the titans',]
  },
    { genre: 'adventure', titles: [
      'the martian',
      'annabelle',
      'the witch',
      'oblivion',] }

]

  const MOVIE_API = `https://www.omdbapi.com/?apikey=1eb052a6&t=`;

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    movieTitle.forEach(movies => {
      movies.titles.forEach(title => {
        fetch(MOVIE_API + title)
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            setMovie(movie=>[...movie, data]);
          })
      });
    })
  }, []);

  console.log(movie)

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
        <Box m={10}>Action</Box>
        <List movies={ movie} genre = 'Action' />
        <Box m={10}>Adventure</Box>
        <List movies={ movie} genre = 'Adventure' />

      </Box>
    </>
  );
}

export default Movies;
