import { Box, HStack, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link, useMatch } from "react-router-dom";

const NavItem = ({ text, to }: { text: string; to: string }) => {
  return (
    <Box
      marginTop={2}
      paddingBlock={1}
      paddingInline={4}
      borderRadius={5}
      border="2px solid"
      backgroundColor={useMatch(to) ? "purple.800" : ""}
      textTransform="uppercase">
      <Link to={to}>{text}</Link>
    </Box>
  );
};

const NavBar = () => {
  const one = useMatch("/inventory");
  const two = useMatch("/aca-inventory");
  const three = useMatch("/temperature");

  return (
    <Box p={4}>
      <HStack
        wrap="wrap"
        gap={4}
        justifyContent={"center"}>
        <Menu>
          <MenuButton
            marginTop={2}
            paddingBlock={1}
            paddingInline={4}
            borderRadius={5}
            border="2px solid"
            backgroundColor={one || two || three ? "purple.800" : ""}
            textTransform="uppercase">
            spot-check inventories
          </MenuButton>
          <MenuList
            bgColor="pink.900"
            color="purple.200">
            <MenuItem
              textTransform="uppercase"
              as={Link}
              to="/inventory">
              angry?
            </MenuItem>
            <MenuItem
              as={Link}
              to="/aca-inventory"
              textTransform="uppercase">
              hurting?
            </MenuItem>
            <MenuItem
              as={Link}
              textTransform="uppercase"
              to="/temperature">
              principles
            </MenuItem>
          </MenuList>
        </Menu>
        <NavItem
          to="literature"
          text="literature"
        />
      </HStack>
    </Box>
  );
};

export default NavBar;
