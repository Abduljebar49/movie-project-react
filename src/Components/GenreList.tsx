import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props{
    onSelectedGenre: (genre:Genre) => void,
    selectedGenre: Genre | null
}

const GenreList = ({onSelectedGenre, selectedGenre}:Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
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
