import { IconButton, Tooltip } from "@chakra-ui/react";
import copyText from "../copyText";
import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

interface CopyButtonProps {
  text: string;
  disabled?: boolean;
}
const CopyButton = ({ text, disabled }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    text && setCopied(false);
  }, [text]);

  return (
    <Tooltip
      hasArrow
      label="Copy and send to your fellow traveller">
      <IconButton
        aria-label="Copy"
        disabled={disabled}
        icon={copied ? <CheckIcon /> : <CopyIcon />}
        size={"xs"}
        onClick={() => {
          copyText(text);
          setCopied(true);
        }}
      />
    </Tooltip>
  );
};
export default CopyButton;
