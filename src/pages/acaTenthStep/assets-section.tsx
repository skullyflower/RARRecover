import CheckboxGroupBox from "@/bits/form/CheckBoxGroupBox";
import { HStack, Stack, Text } from "@chakra-ui/react";
import { assets } from "./aca-tenth-constants";
import CopyButton from "@/bits/form/copy-button";

const AssetsSection = ({
  praise,
  setSetPraise,
}: {
  praise: string[];
  setSetPraise: (value: string[]) => void;
}) => {
  const toCopy = `Praise Today: \n I am ${praise.join(",\n I am ")}`;

  return (
    <Stack gap={4}>
      <HStack justifyContent={"space-between"}>
        <Text>Select Your Assets, include those you are not sure about or would like to have.</Text>
        <CopyButton
          text={toCopy}
          disabled={praise.length === 0}
        />
      </HStack>
      <Text
        textAlign={"center"}
        color={"red.200"}
        size={"lg"}
        fontWeight={"bold"}>
        {praise.length < 10 && "Select at least 10."}
      </Text>
      <CheckboxGroupBox
        columns={3}
        valuesList={praise}
        options={assets}
        setter={setSetPraise}
      />
    </Stack>
  );
};
export default AssetsSection;
