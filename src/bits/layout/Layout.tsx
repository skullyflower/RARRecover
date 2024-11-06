import { Outlet } from "react-router-dom";
import { Box, Center, Image, HStack, VStack, LinkBox } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import NavBar from "../NavBar";
const Layout = () => {
  return (
    <VStack
      justifyContent="center"
      alignItems={"center"}>
      <Box
        w={["100%", "95%"]}
        maxW={"1000px"}>
        <header>
          <HStack
            w="90%"
            justifyContent="space-between">
            <LinkBox
              as={ReactRouterLink}
              to="/"
              p={2}>
              <Image
                src="/images/RARRLogo2.png"
                width={20}
              />
            </LinkBox>
            <NavBar />
          </HStack>
        </header>
        <Center>
          <Outlet />
        </Center>
        <footer id="pagefoot"></footer>
      </Box>
    </VStack>
  );
};
export default Layout;
