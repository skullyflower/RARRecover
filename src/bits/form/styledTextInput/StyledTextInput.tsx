import { Box, Textarea } from "@chakra-ui/react";

interface StyledTextInputProps {
  value: string;
  setter: (value: string) => void;
}

const StyledTextInput = ({ value, setter }: StyledTextInputProps) => {
  return (
    <Box
      flexGrow={3}
      minH={20}
      borderWidth={1}
      borderStyle="solid"
      borderRadius={5}
      className="content">
      <Textarea
        value={value}
        onChange={(ev) => setter(ev.target.value)}
      />
    </Box>
  );
};
export default StyledTextInput;
