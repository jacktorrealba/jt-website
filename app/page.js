'use client'
import PageTransition from "@/components/page-transition"
import { Box,  Divider, Flex, ChakraProvider, Image,  Heading,  Center,   } from "@chakra-ui/react"
import {TypeAnimation} from 'react-type-animation'


export default function Page() {
  return (
    <>
    <ChakraProvider >
        <PageTransition>

            <Center>
              <Flex id='name-img' alignItems='center' mt='3rem'>
                <Box id='name' width='fit-content'>
                  <Heading color='#d3d3d3' size='lg' fontFamily='M PLUS Rounded 1c'>Jack Torrealba</Heading>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center'>
                  <Image borderRadius='full' boxSize='100px' src="/torrealbaProfile.jpg" alt="Jack Torrealba" id="profile-pic"/>
                </Box>
              </Flex>
            </Center>

            <Center mt='2rem' color='#d3d3d3' fontSize='22px'>
              <Box>
                <TypeAnimation
                  sequence={[
                    'Software Developer',
                    1000,
                    'Data Scientist',
                    1000
                  ]}
                  repeat={Infinity}
                  wrapper="span"
                  deletionSpeed={60}
                />
              </Box>
            </Center>
            
            <Center mt='1rem'>
              <Divider width='50%'></Divider>
            </Center>
            
        </PageTransition>
      </ChakraProvider>
    </>
  )
}