'use client'
import PageTransition from '@/components/page-transition'
import {Center, Image, Text, Box,  ChakraProvider,  Heading,  Badge,  UnorderedList, ListItem } from '@chakra-ui/react'
import {FaUser, FaPlane} from 'react-icons/fa'

export default function Page() {
    return (
        <>
            <ChakraProvider>
                <PageTransition>
                    <Center>
                        <Box justifyContent='center' maxW='500px' id='aboutMeContentDiv'>
                            <Box w='100%' color='#d3d3d3' mt='3rem' mb='3rem'>
                                <Box display='inline-flex'>
                                    <Heading size='sm' mr='.5rem' text='true' fontSize='22px' fontFamily='M PLUS Rounded 1c'>
                                        My Journey
                                    </Heading>
                                    <Box mt='auto' mb='auto'>
                                        <FaPlane></FaPlane>
                                    </Box>
                                </Box>

                                <Text className="aboutMe">
                                    During my first job out of college, I was tasked with a solving a problem that my department faced.
                                    We needed a tool or application that could capture rich text data for a major report our group developed. 
                                    At this point in my career, I knew little to nothing about the process of building a full-stack application, but I knew that it would solve our problem.
                                </Text>

                                <Text className="aboutMe">
                                    That&apos;s when I opened up Visual Studio Code and started to architect the form that users would go to
                                    enter rich text data. Months later, I piloted the application and it was a success. I received a myriad of praise for being able to think outside the box and 
                                    challenge myself to learn a new skill that now has brought immense value to my team.
                                </Text>

                                <Box display='inline-flex' mt='3rem'>
                                    <Heading size='sm' mr='.5rem' text='true' fontSize='22px' fontFamily='M PLUS Rounded 1c'>
                                        Get to Know Me  
                                    </Heading>
                                    <Box mt='auto' mb='auto'>
                                        <FaUser></FaUser>
                                    </Box>
                                </Box>

                                <Text className="aboutMe">
                                    I have two French Bulldogs: 
                                </Text>

                                <Box className='pet-image-div' display='flex' pt='1rem'>
                                    <Box className='pet-img-box' pr='1rem'>     
                                        <Badge fontSize='18px'>Ozzy</Badge>                               
                                        <Image id='ozzyImg' border='2px solid #d3d3d3' src='./ozzy-xl.jpg' alt='ozzy' boxSize='300px' objectFit='cover'></Image>
                                    </Box>
                                    <Box className='pet-img-box'>        
                                        <Badge fontSize='18px'>Eevee</Badge>                            
                                        <Image id='eeveeImg' border='2px solid #d3d3d3' src='./eevee-xl.jpg' alt='ozzy' boxSize='300px' objectFit='cover'></Image>
                                    </Box>
                                </Box>

                                <Text className='aboutMe'>
                                    On my free time, I enjoy being outdoors, working out, and coding!
                                    Some of my other hobbies include:
                                </Text>

                                <UnorderedList fontSize='18px'>
                                    <ListItem>custom keyboard building</ListItem>
                                    <ListItem>computer building</ListItem>
                                    <ListItem>car mechanics</ListItem>
                                    <ListItem>woodworking</ListItem>
                                </UnorderedList>
                            </Box>
                        </Box>
                        
                    </Center>                      
                </PageTransition>
            </ChakraProvider>  
        </>
    )
}