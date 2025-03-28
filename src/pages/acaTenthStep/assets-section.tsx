import CheckboxGroupBox from "@/bits/form/CheckBoxGroupBox";
import { Card, CardBody, Stack, Text } from "@chakra-ui/react";
import { assets } from "./aca-tenth-constants";
import { useState } from "react";

const AssetsSection = () => {
  const [praise, setSetPraise] = useState<string[]>([]);

  return (
    <Card
      bg="pink.900"
      //color="purple.200"
      border={["none", "1px solid"]}>
      <CardBody>
        <Stack gap={4}>
          <Text>
            Select Your Assets, include those you are not sure about or would like to have.{" "}
            {praise.length < 10 && "Select at least 10."}
          </Text>
          <CheckboxGroupBox
            columns={3}
            valuesList={praise}
            options={assets}
            setter={setSetPraise}
          />
        </Stack>
      </CardBody>
    </Card>
  );
};
export default AssetsSection;
