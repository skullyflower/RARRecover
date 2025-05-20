import CheckboxGroupBox from "@/bits/form/CheckBoxGroupBox";
import { HStack, Stack, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { traitList } from "./aca-tenth-constants";
import CopyButton from "@/bits/form/copy-button";

const TraitsSection = ({
  traitQs,
  setTraitQs,
}: {
  traitQs: string[];
  setTraitQs: (value: string[]) => void;
}) => {
  const allquestions = useMemo(() => traitList.map((trait) => trait.Q), []);
  const setAfromQ = (Qs: string[]) => {
    const TraitAs: string[] = [];
    Qs.forEach((Q) => {
      const trait = traitList.find((trait) => trait.Q === Q);
      const answer = trait ? trait.A : "";
      TraitAs.push(answer);
    });
    return TraitAs.join("\n- ");
  };

  const tocopy = `Traits I had today:\n - ${setAfromQ(traitQs)}`;

  return (
    <Stack gap={4}>
      <HStack justifyContent={"space-between"}>
        <Text>Select the ones that apply today.</Text>
        <CopyButton
          text={tocopy}
          disabled={traitQs.length === 0}
        />
      </HStack>
      <CheckboxGroupBox
        columns={1}
        valuesList={traitQs}
        options={allquestions}
        setter={setTraitQs}
      />
    </Stack>
  );
};
export default TraitsSection;
