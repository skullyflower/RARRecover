import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  LinkBox,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { Link, useMatch } from "react-router-dom";

const NavItem = ({ text, to }: { text: string; to: string }) => {
  const { colorMode } = useColorMode();
  const color = colorMode === "dark" ? "gray.100" : "red.900";
  const bgcolor = colorMode === "dark" ? "" : "gray.100";
  const activebg = colorMode === "dark" ? "whiteAlpha.300" : "purple.300";
  return (
    <LinkBox
      as={Link}
      width={["100%", "auto"]}
      fontSize={"sm"}
      fontWeight={"bold"}
      lineHeight={1}
      paddingBlock={1}
      paddingInline={2}
      borderRadius={5}
      border="2px solid"
      backgroundColor={useMatch(to) ? activebg : bgcolor}
      color={color}
      textTransform="uppercase"
      _hover={{ cursor: "pointer", backgroundColor: activebg }}
      to={to}>
      {text}
    </LinkBox>
  );
};

const MenuDDropDown = () => {
  const { colorMode } = useColorMode();
  const color = colorMode === "dark" ? "gray.100" : "red.900";
  const bgcolor = colorMode === "dark" ? "" : "gray.100";
  const activebg = colorMode === "dark" ? "whiteAlpha.300" : "purple.300";

  return (
    <Menu defaultIsOpen>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            color={color}
            variant={"outline"}
            width={["100%", "auto"]}
            fontSize={"sm"}
            fontWeight={"bold"}
            lineHeight={1}
            paddingBlock={1}
            paddingInline={2}
            backgroundColor={isOpen ? activebg : bgcolor}
            _active={{ activebg }}
            textTransform="uppercase"
            borderRadius={5}
            border="2px solid"
            rightIcon={<ChevronDownIcon />}>
            Daily Inventories
          </MenuButton>
          <MenuList
            background={colorMode === "dark" ? "gray.900" : "gray.50"}
            padding={2}
            border={0}>
            <Stack
              direction={["column", "row"]}
              gap={2}
              justifyContent={"center"}>
              <NavItem
                to="/inventory"
                text="Trouble"
              />
              <NavItem
                to="/aca-tenth-step"
                text="Spawn of Trouble"
              />
              <NavItem
                to="serenity"
                text="Control"
              />
              <NavItem
                to="fears"
                text="Fear"
              />
            </Stack>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

const toggleFontMode = () => {
  const usePlainFonts = JSON.parse(window.localStorage.getItem("UseRegFonts") || "false");
  window.localStorage.setItem("UseRegFonts", JSON.stringify(!usePlainFonts));
  window.location.reload();
};

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={4}>
      <HStack
        wrap="wrap"
        gap={2}
        justifyContent={"center"}>
        <Button
          size={"sm"}
          onClick={toggleFontMode}>
          Az
        </Button>
        <Button
          size="sm"
          onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        <MenuDDropDown />
        <NavItem
          to="steps"
          text="The Steps"
        />
        <NavItem
          to="literature"
          text="literature"
        />
      </HStack>
    </Box>
  );
};

export default NavBar;
