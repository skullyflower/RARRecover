import { Checkbox, CheckboxGroup, Box, SimpleGrid } from "@chakra-ui/react";

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

  return (
    <Box
      borderWidth={1}
      borderStyle="solid"
      borderRadius={5}
      p={15}
      gap={2}
      className="content">
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
              value={`(${part[0]}) ${part[1]}`}
              onChange={updateValueList(valuesList, `(${part[0]}) ${part[1]}`)}>
              <b>({part[0]})</b> {part[1]}
            </Checkbox>
          ))}
        </SimpleGrid>
      </CheckboxGroup>
    </Box>
  );
};
export default CheckboxGroupBox;
