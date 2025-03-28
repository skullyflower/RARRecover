import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const ToolsUsedToday = () => {
  const [partThreeValues, setPartThreeValues] = useState<string[]>([]);
  const [oneThree, setOneThree] = useState<string>();
  const addAthree = () => {
    if (oneThree) {
      setPartThreeValues([...partThreeValues, oneThree]);
      setOneThree("");
    }
  };

  return (
    <Card
      bg="pink.900"
      //color="purple.200"
      border={["none", "1px solid"]}>
      <CardBody>
        <Stack gap={4}>
          <Heading
            as="h3"
            size="md">
            Exercise 3: One Day at a Time Exercise
          </Heading>
          <Text>
            What are the tools of recovery you are using to help you live life in the moment?
          </Text>
          <Box
            borderRadius={6}
            p={4}>
            <Stack gap={2}>
              {partThreeValues.map((value, index) => (
                <HStack
                  key={index}
                  padding={2}
                  border={"1px solid"}
                  borderColor="purple.700"
                  borderRadius={6}
                  justifyContent={"space-between"}
                  _hover={{ backgroundColor: "pink.800", borderColor: "purple.300" }}>
                  <Text key={index}>{value}</Text>
                  <Button
                    size="xs"
                    onClick={() =>
                      setPartThreeValues(partThreeValues.filter((_, i) => i !== index))
                    }>
                    <DeleteIcon />
                  </Button>
                </HStack>
              ))}
            </Stack>
          </Box>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type="text"
              placeholder="Describe a tool you used today"
              onChange={(e) => setOneThree(e.target.value)}
              value={oneThree}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={addAthree}>
                Add
              </Button>
            </InputRightElement>
          </InputGroup>
        </Stack>
      </CardBody>
    </Card>
  );
};
export default ToolsUsedToday;
