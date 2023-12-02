
import { HStack,Image,Text } from "@chakra-ui/react";
import logo from '../assets/Logo/logo.webp'
import ColorModeSwich from "./ColorModeSwich";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
        <Image src={logo} boxSize='60px' />
        <SearchInput />
        <ColorModeSwich />
    </HStack>
  )
}

export default NavBar