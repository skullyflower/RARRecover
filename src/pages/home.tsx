import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

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
            gap={2}
            align={"center"}>
            <Text>Tired of the angry crowds with pitchforks and torches?</Text>
            <Text>Do mothers clutch their children when you walk by?</Text>
            <Text>WE KNOW HOW YOU FEEL!</Text>
            <Image
              src="/images/RARR_Splash.png"
              alt="Welcome Home"
            />
            <Text>Real recovery for ficticious creatures.</Text>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
}

export default HomePage;
