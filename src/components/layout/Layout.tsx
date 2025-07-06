import { Outlet } from "react-router-dom";
import { Box, Center, Image, LinkBox, Stack, useColorMode } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import NavBar from "../NavBar";
const Layout = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === "light" ? "whiteAlpha.800" : undefined}
      width="100%"
      height="100vh"
      position={"fixed"}
      overflow={"auto"}>
      <Stack
        justifyContent="center"
        alignItems={"stretch"}
        w={{ base: "100%", md: "95%" }}
        marginInline={["0", "auto"]}
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
      </Stack>
    </Box>
  );
};
export default Layout;
