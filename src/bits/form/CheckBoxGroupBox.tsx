import { Checkbox, CheckboxGroup, Box, SimpleGrid, HStack, Badge } from "@chakra-ui/react";
import { useEffect } from "react";

interface CheckboxGroupBoxProps {
  valuesList: string[];
  options: Record<string, string>;
  setter: (newvalue: string[]) => void;
}
const CheckboxGroupBox = ({ valuesList, options, setter }: CheckboxGroupBoxProps) => {
  const handleCBChange = (list: string[], value: string) => {
    return list.includes(value) ? list.filter((a) => a !== value) : [...list, value];
  };

  const updateValueList = (oldValue: string[], newValue: string) => () => {
    setter(handleCBChange(oldValue, newValue));
  };
  useEffect(() => {
    setter([]);
  }, [options]);

  return (
    <Box
      borderWidth={1}
      borderStyle="solid"
      borderRadius={5}
      p={15}
      gap={2}
      className="content">
      <HStack
        gap={2}
        padding={2}>
        {valuesList.map((value) => (
          <Badge
            variant="outline"
            borderRadius={2}
            key={value}>
            {value.replace("_", " ")}
          </Badge>
        ))}
      </HStack>
      <CheckboxGroup
        colorScheme="pink"
        value={valuesList}>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          gap={4}>
          {Object.entries(options).map((part) => (
            <Checkbox
              //alignItems="start"
              border="1px solid"
              borderColor="purple.700"
              gap={4}
              borderRadius={7}
              _hover={{ backgroundColor: "pink.800", borderColor: "purple.300" }}
              p={2}
              key={part[0]}
              value={part[0]}
              onChange={updateValueList(valuesList, part[0])}>
              <b>( {part[0].replace("_", " ")} )</b> {part[1]}
            </Checkbox>
          ))}
        </SimpleGrid>
      </CheckboxGroup>
    </Box>
  );
};
export default CheckboxGroupBox;
