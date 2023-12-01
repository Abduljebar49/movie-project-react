
import { HStack,Image,Text } from "@chakra-ui/react";
import logo from '../assets/Logo/logo.webp'
import ColorModeSwich from "./ColorModeSwich";

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding="10px">
        <Image src={logo} boxSize='60px' />
        <ColorModeSwich />
    </HStack>
  )
}

export default NavBar