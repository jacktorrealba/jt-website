'use client'
import PageTransition from "@/components/page-transition"
import { Box, Flex, ChakraProvider, Image, Text, Heading, UnorderedList, ListItem, extendTheme, Center, AbsoluteCenter,  } from "@chakra-ui/react"

export default function Page() {
  return (
    <>
    <ChakraProvider >
        <PageTransition>

            <Center>
              <Flex id='name-img' alignItems='center' mt='3rem'>
                <Box id='name' width='fit-content'>
                  <Heading color='#d3d3d3' size='lg' fontFamily='M PLUS Rounded 1c' className="typewriter">Jack Torrealba</Heading>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center'>
                  <Image borderRadius='full' boxSize='100px' src="/torrealbaProfile.jpg" alt="Jack Torrealba" id="profile-pic"/>
                </Box>
              </Flex>
            </Center>

            <Center mt='2rem'>
              <Text color='#d3d3d3' className="description" fontSize='18px' >
                I&apos;m a full-stack web developer with a machine learning background.
              </Text>
            </Center>

        </PageTransition>
      </ChakraProvider>
    </>
  )
}