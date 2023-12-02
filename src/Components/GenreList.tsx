import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((ele) => (
        <ListItem key={ele.id} paddingY="5px">
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(ele.image_background)}
            />
            <Text fontSize="lg">{ele.name}</Text>
          </HStack>
        </ListItem>
      ))}

      <HStack></HStack>
    </List>
  );
};

export default GenreList;
