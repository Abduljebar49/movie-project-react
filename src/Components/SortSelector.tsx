import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedSelector: (selector: string) => void;
  selectedSelector: string | null;
}
const SortSelector = ({ onSelectedSelector, selectedSelector }: Props) => {
  //   const { data, error } = usePlatforms();
  //   if (error) return null;
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release data" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrder.find(
    (order) => order.value == selectedSelector
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by {currentSortOrder?.label || sortOrder[0].label}
        {/* {selectedPlatform? selectedPlatform.name : " Platform Selector"} */}
      </MenuButton>
      <MenuList>
        {sortOrder.map((ele) => (
          <MenuItem
            key={ele.value}
            onClick={() => onSelectedSelector(ele.value)}
          >
            {ele.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
