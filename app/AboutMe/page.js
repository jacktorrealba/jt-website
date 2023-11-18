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
                                    <Heading size='sm' mr='.5rem' text='true' fontFamily='M PLUS Rounded 1c'>
                                        My Journey  
                                    </Heading>
                                    <Box mt='auto' mb='auto'>
                                        <FaPlane></FaPlane>
                                    </Box>
                                </Box>
                                <Text className="aboutMe">
                                    I went to school for data analytics where I found a passion for machine learning and coding! 
                                    It wasn&apos;t until my first job where I built a web application that I was introduced to the world of full-stack development
                                    and decided to pursue a career in web development.
                                </Text>

                                <Text className="aboutMe">
                                    During my first job out of college, I was presented with a problem that my department faced.
                                    They needed a tool or application that could capture rich text data that would be fed into a report. 
                                    At this point in my career, I knew little to nothing about the process web development, but I knew enough to understand that 
                                    building a web application would definitely solve my issue.
                                </Text>

                                <Text className="aboutMe">
                                    That&apos;s when I fired up Visual Studio Code and started to architect the form that users would go to
                                    to enter rich text data. Months later, I piloted the application and it was a success. It solved the issue that was 
                                    originally presented and I received a myriad of praise for being able to think outside the box and 
                                    challenge myself to learn a new skill that now has brought immense value to my team.
                                </Text>

                                <Box display='inline-flex' mt='3rem'>
                                    <Heading size='sm' mr='.5rem' text='true' fontFamily='M PLUS Rounded 1c'>
                                        About Me  
                                    </Heading>
                                    <Box mt='auto' mb='auto'>
                                        <FaUser></FaUser>
                                    </Box>
                                </Box>

                                <Text className="aboutMe">
                                    I have two French Bulldogs: 
                                </Text>

                                <Box className='pet-image-div' display='flex' pt='1rem'>
                                    <Box pr='1rem'>     
                                        <Badge>Ozzy</Badge>                               
                                        <Image id='ozzyImg' border='2px solid #d3d3d3' src='./ozzy-xl.jpg' alt='ozzy' boxSize='150px' objectFit='cover'></Image>
                                    </Box>
                                    <Box>        
                                        <Badge>Eevee</Badge>                            
                                        <Image id='eeveeImg' border='2px solid #d3d3d3' src='./eevee-xl.jpg' alt='ozzy' boxSize='150px' objectFit='cover'></Image>
                                    </Box>
                                </Box>

                                <Text className='aboutMe'>
                                    On my free time, I enjoy being outdoors, working out, and coding!
                                    Some of my other hobbies include:
                                </Text>

                                <UnorderedList fontSize='12px'>
                                    <ListItem>custom keyboard building</ListItem>
                                    <ListItem>computer building</ListItem>
                                    <ListItem>car mechanics</ListItem>
                                    <ListItem>woodworking</ListItem>
                                    <ListItem>botany</ListItem>
                                </UnorderedList>
                            </Box>
                        </Box>
                        
                    </Center>                      
                </PageTransition>
            </ChakraProvider>  
        </>
    )
}