import { Card, CardBody, CardHeader, Center, Heading, Image, Stack, Text } from "@chakra-ui/react";

function HomePage() {
  return (
    <Card
      bg="pink.900"
      color="purple.300"
      border="1px solid"
      marginInline="auto"
      marginBlock={4}>
      <CardHeader textAlign="center">
        <Heading
          color="pink.400"
          fontFamily="Creepster"
          fontSize="4xl">
          Welcome to Ragers and Rampagers Recovering
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack gap={5}>
          <Card
            bg="pink.900"
            color="purple.200"
            border="1px solid"
            fontWeight={700}
            padding={4}
            textAlign="center"
            variant="outline">
            <Text>Tired of the angry crowds with pitchforks and torches?</Text>
            <Text>Do mothers clutch their children when you walk by?</Text>
            <Text>WE KNOW HOW YOU FEEL.</Text>
          </Card>

          <Center>
            <Image
              src="/images/RARR_Splash.png"
              alt="Welcome Home"
            />
          </Center>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default HomePage;
