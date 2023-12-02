
import { HStack,Image } from "@chakra-ui/react";
import logo from '../assets/Logo/logo.webp'
import ColorModeSwich from "./ColorModeSwich";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (text: string) => void;
}
const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding="10px">
        <Image src={logo} boxSize='60px' />
        <SearchInput onSearchTextChange={onSearch} />
        <ColorModeSwich />
    </HStack>
  )
}

export default NavBar