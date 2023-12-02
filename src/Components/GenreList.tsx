import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();

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
            <Text fontSize='lg'>{ele.name}</Text>
          </HStack>
        </ListItem>
      ))}

      <HStack></HStack>
    </List>
  );
};

export default GenreList;
