import { Card, CardBody, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { feelings } from "./aca-tenth-constants";

const FeelingsStatement = () => {
  const [when, setWhen] = useState<string>();
  const [feeling, setFeeling] = useState<string>("");
  const [because, setBecause] = useState<string>("");

  return (
    <Card
      bg="pink.900"
      //color="purple.200"
      border={["none", "1px solid"]}>
      <CardBody>
        <Stack gap={4}>
          <Text>Practice a feeling statement.</Text>
          <Stack gap={4}>
            <Text>I feel</Text>
            <HStack gap={4}>
              <Select
                placeholder="Select a feeling"
                transform={"capitalize"}
                value={feeling}
                onChange={(e) => setFeeling(e.target.value)}>
                {feelings.sort().map((value, index) => (
                  <option key={index}>{value}</option>
                ))}
              </Select>
              <Text> when </Text>
              <Input
                value={when}
                onChange={(e) => setWhen(e.target.value)}
              />
              <Text> because </Text>
              <Input
                value={because}
                onChange={(e) => setBecause(e.target.value)}
              />
            </HStack>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};
export default FeelingsStatement;
