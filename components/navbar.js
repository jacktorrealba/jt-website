'use client'
import { Box,  Menu, Center, Button,  ChakraProvider, MenuButton, MenuList, MenuItem,  } from "@chakra-ui/react"
import Link from 'next/link'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import { DownloadIcon, HamburgerIcon, EmailIcon } from "@chakra-ui/icons"
import NavSeparator from "./NavSeparator"
import { IconButton } from "@chakra-ui/react"




export default function NavBar(){
    return (

        <ChakraProvider>
                <Center className="navbar">
                    <Box className="navbar-box" w='50%' display='flex' justifyContent='space-evenly'>

                        <Link className="menu-items" href='/'>Home</Link>
                        <Link className="menu-items" href='/Portfolio'>Portfolio</Link>
                        <Link className="menu-items" href='/AboutMe'>About Me</Link>
                        <Link className='menu-items' id="contactMe" href='mailto:jack.torrealba@uconn.edu' size='md' >
                            Contact Me
                        </Link>
                       
                        <Box className="menu-icon">
                            <Link  href='https://www.linkedin.com/in/jack-torrealba-743a90192/' target="_blank" rel="noreferrer">
                                <FaLinkedin id="linkedInIcon" color='#0077b5' size='30px'></FaLinkedin>
                            </Link>
                        </Box>
                        <Box className="menu-icon">
                            <Link href='https://github.com/jacktorrealba' target="_blank" rel="noreferrer">
                                <FaGithub id="githubIcon" color='#d3d3d3' size='30px'></FaGithub>
                            </Link>
                        </Box>
                        <Box className="menu-icon">
                            <Button size='md' rightIcon={<DownloadIcon></DownloadIcon>}>
                                <a href="./TorrealbaResume.pdf" download='TorrealbaResume.pdf' target="_blank" rel="noreferrer">Resume</a>
                            </Button>
                        </Box>
                        
                        <Box id="menu-div" display='none'>
                            <Menu>
                                <MenuButton 
                                    as={IconButton} 
                                    aria-label="Options" 
                                    icon={<HamburgerIcon/>}
                                    size='xs'
                                    id="menuButton"
                                />
                                <MenuList bg='#d3d3d3' minWidth='fit-content'>
                                    <MenuItem bg='#d3d3d3'>
                                        <Link className="menu-items-sm" href='https://www.linkedin.com/in/jack-torrealba-743a90192/' target="_blank" rel="noreferrer">LinkedIn</Link>
                                    </MenuItem>
                                    <MenuItem bg='#d3d3d3'>
                                        <Link className="menu-items-sm" href='https://github.com/jacktorrealba' target="_blank" rel="noreferrer">GitHub</Link>
                                    </MenuItem>
                                    <MenuItem bg='#d3d3d3'>
                                        <Link className="menu-items-sm" href="./TorrealbaResume.pdf" download='TorrealbaResume.pdf' target="_blank" rel="noreferrer">
                                            Resume <DownloadIcon/>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem bg='#d3d3d3'>
                                        <Link className="menu-items-sm" href='mailto:jack.torrealba@uconn.edu'>
                                            Contact Me <EmailIcon mb='5px'/>
                                        </Link>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
                </Center>
            <NavSeparator></NavSeparator>
        </ChakraProvider>
    )
}