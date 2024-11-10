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
            textTransform="uppercase">
            spot-check inventories
          </MenuButton>
          <MenuList>
            <MenuItem textTransform="uppercase">
              <Link to="/inventory">angry?</Link>
            </MenuItem>
            <MenuItem textTransform="uppercase">
              <Link to="/aca-inventory">hurting?</Link>
            </MenuItem>
            <MenuItem textTransform="uppercase">
              <Link to="/temperature">principles</Link>
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
