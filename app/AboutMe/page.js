'use client'
import PageTransition from '@/components/page-transition'
import {Center, Image, Text, Box,  ChakraProvider, Heading,  Badge,  UnorderedList, ListItem, Divider } from '@chakra-ui/react'

import {FaUser, FaPlane} from 'react-icons/fa'

export default function Page() {
    return (
        <>
            <ChakraProvider>
                <PageTransition>
                    <Center>
                        <Box justifyContent='center' maxW='500px' id='aboutMeContentDiv'>
                            <Box w='100%' color='#d3d3d3' mt='3rem' mb='3rem'>
                                <Box>
                                    
                                    <Divider mt='1rem'/>
                                </Box>

                                <Text className="aboutMe">
                                    Jack Torrealba was born and raised in Connecticut.
                                </Text>

                                <Text className="aboutMe">
                                    He attended the University of Connecticut and earned a Bachelor's of Science in Business Data Analytics and a 
                                    Master's of Science in Business Analytics and Data Science. 
                                </Text>

                                <Text className="aboutMe">
                                    He is currently working as a Data Analyst at Charter Communications in the Customer Operations division where he 
                                    utilizes his analytical and computer science skills to build ETL pipelines, design Tableau dashboards, manage a SQL Server database, and maintain his own .NET web application used
                                    by internal employees to encourage data integrity & accuracy and streamline reporting.
                                </Text>


                                <Box mt='3rem'>
                                    <Heading size='sm' mr='.5rem' text='true' fontSize='22px' fontFamily='M PLUS Rounded 1c'>
                                        Get to Know Me Personally
                                    </Heading>
                                    <Divider mt='1rem'/>
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
                                    <ListItem>gardening</ListItem>
                                </UnorderedList>
                            </Box>
                        </Box>
                        
                    </Center>                      
                </PageTransition>
            </ChakraProvider>  
        </>
    )
}