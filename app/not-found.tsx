import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => (
  <>
    <Navbar />

    <Box

      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-br, gray.900, gray.800)"
      px={4}
      py={8}
    >
      <Box textAlign="center">
        <Text
         textStyle={"title"}
          fontWeight="extrabold"
          color="black"
       
        >
          404
        </Text>

        <Text
          mt={4}
         textStyle={"basicText"}
          fontWeight="medium"
                 color="black"
        >
          Whoops—this page has gone off the grid.
        </Text>

        <Text
          mt={2}
          maxW="md"
          mx="auto"
          color="gray.500"
          lineHeight="tall"
    textStyle={"basicText"}
        >
          The link you followed may be broken, or the page has been removed.  
          Let’s get you back on track.
        </Text>

        <Box
          as="a"
          href="/"
          display="inline-block"
          mt={6}
          px={8}
          py={3}
          textStyle={"basicText"}
          fontWeight="semibold"
          color="white"
     bg={"black"}
          rounded="md"
        
          _hover={{
            bg: 'gray.700',
            transform: 'scale(1.05)',

          }}
          transition="all 0.2s"
        >
          Take Me Home
        </Box>
      </Box>
    </Box>

    <Footer />
  </>
);

export default NotFound;
