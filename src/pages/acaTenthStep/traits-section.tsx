import CheckboxGroupBox from "@/bits/form/CheckBoxGroupBox";
import { Card, CardBody, Text } from "@chakra-ui/react";
import { useState } from "react";
import { traitList } from "./aca-tenth-constants";

const TraitsSection = () => {
  const [traits, setTraits] = useState<string[]>([]);
  return (
    <Card
      bg="pink.900"
      border={["none", "1px solid"]}>
      <CardBody>
        <Text>Select the ones that apply today.</Text>
        <CheckboxGroupBox
          columns={1}
          valuesList={traits}
          options={traitList}
          setter={setTraits}
        />
      </CardBody>
    </Card>
  );
};
export default TraitsSection;
