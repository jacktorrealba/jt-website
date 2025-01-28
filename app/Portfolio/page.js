'use client'
import PageTransition from "@/components/page-transition"
import { Text, Center, Box, Heading, ChakraProvider, Image, Link, Divider } from "@chakra-ui/react"
import { useState } from "react"
import { FaBold, FaBrain, FaGithub } from "react-icons/fa"

export default function Portfolio() {

    return (
        <>
        <ChakraProvider>
            <PageTransition>
                <Center>
                    <Box justifyContent='start' width='500px' id='portfolioContainer'>
                        <Box w='100%' mt='3rem' mb='3rem' color='#d3d3d3'>
                            <Heading display='flex' size='sm' text='true' fontSize='22px' fontFamily='M PLUS Rounded 1c' width='auto' >
                                Machine Learning/Data Science
                            </Heading>
                            <Divider mt='1rem'/>
                            <Box ml="5">
                                <Box display='inline-flex'  className="project-name" color='#d3d3d3'>
                                    <Link textDecoration='underline' fontWeight='bold' href="https://github.com/jacktorrealba/clean-weather-energy" target="_blank" rel="noreferrer">
                                        Predict Energy Consumption
                                    </Link>
                                    <Link href="https://github.com/jacktorrealba/clean-weather-energy" target="_blank" rel="noreferrer" mt='auto' mb='auto' mr='auto' pl='0.5rem'>
                                        <FaGithub color="#d3d3d3"/>
                                    </Link> 
                                </Box>
                                <Box className="image-plus-desc" width='fit-content' display='flex'>
                                    <Text className="project-description">A feed forward neural network model for predicting energy consumption based on various weather factors.</Text>
                                </Box>
                            </Box>  

                            <Heading display='flex' size='sm' mt="20" text='true' fontSize='22px' fontFamily='M PLUS Rounded 1c' width='auto' >
                                Full Stack Projects
                            </Heading>
                            <Divider mt='1rem'/>
                            <Box ml="5">
                                <Box display='inline-flex'  className="project-name" color='#d3d3d3'>
                                    <Link textDecoration='underline' fontWeight='bold' href="https://davieloria.vercel.app/" target="_blank" rel="noreferrer">
                                        CRUD Portfolio Website
                                    </Link>
                                    <Link href="https://github.com/jacktorrealba/davies-website" target="_blank" rel="noreferrer" mt='auto' mb='auto' mr='auto' pl='0.5rem'>
                                        <FaGithub color="#d3d3d3"/>
                                    </Link> 
                                </Box>
                                <Box className="image-plus-desc" width='fit-content' display='flex'>
                                    <Text className="project-description">Designed a portfolio website for a physicist using MERN stack that allows the owner to toggle between displaying various publications stored in a MongoDB collection. The application has CRUD functions through a management feature in which the owner can access from authenticating using a password.</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Center>
            </PageTransition>
        </ChakraProvider>
        </>
    )   
}