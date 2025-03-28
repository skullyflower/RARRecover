import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
  HStack,
} from "@chakra-ui/react";
import React from "react";

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
}
const AccordionSection: React.FC<AccordionSectionProps> = ({ title, children }) => {
  return (
    <AccordionItem>
      <AccordionButton
        backgroundColor={"pink.900"}
        _hover={{ backgroundColor: "pink.700" }}
        borderRadius={6}
        border={"1px solid"}>
        <HStack
          width={"100%"}
          justifyContent={"space-between"}>
          <Heading
            as="h3"
            size="md">
            {title}
          </Heading>
          <AccordionIcon />
        </HStack>
      </AccordionButton>
      <AccordionPanel>{children}</AccordionPanel>
    </AccordionItem>
  );
};
export default AccordionSection;
