import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearchTextChange: (text: string) => void;
}

const SearchInput = ({ onSearchTextChange }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
    style={{width:'100%'}}
      onSubmit={(event) => {
        event.preventDefault();
        onSearchTextChange(ref.current!.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games ..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
