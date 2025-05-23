import { Box, Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

function HomePage() {
  return (
    <Stack gap={2}>
      <Heading
        as="h2"
        size="lg"
        textAlign="center">
        Welcome to Ragers and Rampagers Recovering
      </Heading>
      <Card
        bg="pink.900"
        color="purple.300"
        border="1px solid"
        marginInline="auto"
        marginBlock={4}>
        <CardBody>
          <Stack
            spacing={4}
            align="center">
            <Stack
              direction={{ base: "column", md: "row" }}
              gap={2}
              position={"relative"}
              justifyContent="center"
              width="100%">
              <Box
                backgroundColor="purple.300"
                color={"pink.900"}
                borderRadius="md"
                padding={8}
                width={{ base: "100%", md: "400px" }}
                maxH="fit-content"
                textAlign="left"
                position={{ base: "static", md: "relative" }}
                left="50px"
                top="200px"
                fontSize={["lg", "xl"]}>
                <Text>Tired of the angry crowds with pitchforks and torches?</Text>
                <Text>Do mothers clutch their children when you walk by?</Text>
                <Text>WE KNOW HOW YOU FEEL!</Text>
              </Box>
              <Image
                src="/images/RARR_Splash.png"
                alt="Welcome Home"
                width={{ base: "100%", md: "65%" }}
              />
            </Stack>
            <Text>Real recovery for ficticious creatures.</Text>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
}

export default HomePage;
