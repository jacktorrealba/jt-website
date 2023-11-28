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
                                Machine Learning  
                            </Heading>

                            <Divider mt='1rem'/>

                            <Box>

                                <Box display='inline-flex' className="project-name" color='#d3d3d3'>

                                    <Link textDecoration='underline' fontWeight='bold' href="https://github.com/jacktorrealba/clean-weather-energy" target="_blank" rel="noreferrer">
                                        Predict Energy Consumption
                                    </Link>

                                    <Link href="https://github.com/jacktorrealba/clean-weather-energy" target="_blank" rel="noreferrer" mt='auto' mb='auto' mr='auto' pl='0.5rem'>
                                        <FaGithub color="#d3d3d3"/>
                                    </Link> 
                                    
                                </Box>

                                <Box className="image-plus-desc" width='fit-content' display='flex'>
                                    <Image id='ffnn' alt="ffnn" src="./df_hist_FE.png" width='200px' objectFit='cover'/>
                                    <Text className="project-description">A feed forward neural network model for predicting energy consumption based on various weather factors.</Text>
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