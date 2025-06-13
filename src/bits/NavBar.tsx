import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, LinkBox, Menu, MenuButton, MenuList, Stack } from "@chakra-ui/react";
import { Link, useMatch } from "react-router-dom";

const NavItem = ({ text, to }: { text: string; to: string }) => {
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
      backgroundColor={useMatch(to) ? "whiteAlpha.300" : ""}
      textTransform="uppercase"
      _hover={{ cursor: "pointer", backgroundColor: "whiteAlpha.300" }}
      to={to}>
      {text}
    </LinkBox>
  );
};

const MenuDDropDown = () => {
  return (
    <Menu defaultIsOpen>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            variant={"outline"}
            width={["100%", "auto"]}
            fontSize={"sm"}
            fontWeight={"bold"}
            lineHeight={1}
            paddingBlock={1}
            paddingInline={2}
            backgroundColor={isOpen ? "whiteAlpha.300" : "whiteAlpha.100"}
            textTransform="uppercase"
            borderRadius={5}
            border="2px solid"
            rightIcon={<ChevronDownIcon />}>
            Daily Inventories
          </MenuButton>
          <MenuList
            background={"gray.900"}
            padding={2}
            border={0}>
            <Stack
              direction={["column", "row"]}
              gap={2}
              justifyContent={"center"}>
              <NavItem
                to="/inventory"
                text="Troubles"
              />
              <NavItem
                to="/aca-tenth-step"
                text="Emotional Sobriety"
              />
              <NavItem
                to="serenity"
                text="Serenity"
              />
              <NavItem
                to="fears"
                text="Fears"
              />
            </Stack>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

const NavBar = () => {
  return (
    <Box p={4}>
      <HStack
        wrap="wrap"
        gap={2}
        justifyContent={"center"}>
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
