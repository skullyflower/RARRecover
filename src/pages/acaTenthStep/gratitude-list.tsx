import CopyButton from "@/bits/form/copy-button";
import { HStack, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import ListerInput from "@/bits/form/ListerInput";

const GratitudeList = () => {
  const [listOfGrats, setListOfGrats] = useState<string[]>([]);
  const tocopy = `Today I am grateful for:\n- ${listOfGrats.join(", \n- ")}`;

  return (
    <Stack gap={4}>
      <HStack justifyContent={"space-between"}>
        <Text>What are you feeling grateful for today?</Text>
        <CopyButton
          text={tocopy}
          disabled={listOfGrats.length === 0}
        />
      </HStack>
      <ListerInput
        list={listOfGrats}
        setList={setListOfGrats}
        placeholder="Something you are grateful for ..."
      />
    </Stack>
  );
};
export default GratitudeList;
