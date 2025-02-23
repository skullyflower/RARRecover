import { Card, Heading, HStack, ListItem, OrderedList, Stack } from "@chakra-ui/react";
import { steps } from "./steps-constants";
import useProgramDropDown from "@/bits/form/useProgramDropDown";

const programOptions = Object.keys(steps);
const TheSteps = () => {
  const { ProgramDropDown, selectedProgram } = useProgramDropDown(programOptions);

  return (
    <Stack
      gap={4}
      width="100%">
      <HStack
        align={"center"}
        justify={"center"}
        gap={4}>
        <Heading
          textAlign="center"
          as="h1"
          size="xl">
          The 12 Steps of
        </Heading>
        <ProgramDropDown />
      </HStack>
      <Card
        bg="pink.900"
        //color="purple.200"
        border={["none", "1px solid"]}
        p={8}>
        <OrderedList>
          <Stack>
            {steps[selectedProgram].map((step, idx) => (
              <ListItem
                key={idx}
                maxW={700}
                fontSize="xl">
                {step}
              </ListItem>
            ))}
          </Stack>
        </OrderedList>
      </Card>
    </Stack>
  );
};
export default TheSteps;
