import { Box, HStack, LinkBox } from "@chakra-ui/react";
import { Link, useMatch } from "react-router-dom";

const NavItem = ({ text, to }: { text: string; to: string }) => {
  return (
    <LinkBox
      as={Link}
      width={["100%", "auto"]}
      marginTop={2}
      paddingBlock={1}
      paddingInline={4}
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

const NavBar = () => {
  return (
    <Box p={4}>
      <HStack
        wrap="wrap"
        gap={2}
        justifyContent={"center"}>
        <NavItem
          to="steps"
          text="The Steps"
        />
        <NavItem
          to="/inventory"
          text="resentments"
        />
        <NavItem
          to="/aca-tenth-step"
          text="ACA 10th Step"
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
