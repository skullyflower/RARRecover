import CheckboxGroupBox from "@/bits/form/CheckBoxGroupBox";
import { HStack, Link, Stack, Text } from "@chakra-ui/react";
import { laundryLists } from "@/pages/acaTenthStep/aca-tenth-constants";
import CopyButton from "@/bits/form/copy-button";
const bothLaundryLists = laundryLists.flat();
const LaundryListSection = ({
  llTraits,
  setLLTraits,
}: {
  llTraits: string[];
  setLLTraits: (value: string[]) => void;
}): JSX.Element => {
  const toCopy = `Today I: \n\t• ${llTraits.join(",\n\t• I ")}`;

  return (
    <Stack gap={4}>
      <HStack justifyContent={"space-between"}>
        <Text>
          Select the Laundry List and Other Laundry List traits that you experienced today.{" "}
          <Link
            href="https://adultchildren.org/literature/laundry-list/"
            target="literature">
            Go to adultchildren.org more information.
          </Link>
        </Text>
        <HStack gap={2}>
          <CopyButton
            text={toCopy}
            disabled={llTraits.length === 0}
          />
        </HStack>
      </HStack>
      <CheckboxGroupBox
        columns={2}
        valuesList={llTraits}
        options={bothLaundryLists}
        setter={setLLTraits}
      />
    </Stack>
  );
};
export default LaundryListSection;
