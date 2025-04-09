import { Outlet } from "react-router-dom";
import { Box, Center, Image, VStack, LinkBox, Stack } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import NavBar from "../NavBar";
const Layout = () => {
  return (
    <VStack
      justifyContent="center"
      alignItems={"center"}>
      <Box
        w={["100%", "95%"]}
        maxW={"900px"}>
        <header>
          <Stack
            direction={["column", "row"]}
            paddingInline={4}
            justifyContent="space-between"
            alignItems={["center", "flex-start"]}>
            <LinkBox
              width="120px"
              as={ReactRouterLink}
              to="/"
              p={2}>
              <Image
                src="/images/RARRLogo2.png"
                alt="Ragers and Rampagers, Recovering"
              />
            </LinkBox>
            <NavBar />
          </Stack>
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
