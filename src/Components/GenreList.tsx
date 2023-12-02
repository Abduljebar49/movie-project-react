import { Button, HStack, Heading, Image, List, ListItem} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props{
    onSelectedGenre: (genre:Genre) => void,
    selectedGenre: Genre | null
}

const GenreList = ({onSelectedGenre, selectedGenre}:Props) => {
  const { data } = useGenres();
  return (
    <List>
        <Heading fontSize={'2xl'} marginBottom={2}>Genres</Heading>
      {data.map((ele) => (
        <ListItem key={ele.id} paddingY="5px">
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              objectFit={'cover'}
              src={getCroppedImageUrl(ele.image_background)}
            />
            <Button whiteSpace='normal' textAlign={'left'} fontWeight={ele.id === selectedGenre?.id ? 'bold' : 'normal'} variant='link' onClick={()=>onSelectedGenre(ele)} fontSize="lg">{ele.name}</Button>
          </HStack>
        </ListItem>
      ))}

      <HStack></HStack>
    </List>
  );
};

export default GenreList;
