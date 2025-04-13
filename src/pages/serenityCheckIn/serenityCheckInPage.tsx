import CopyButton from "@/bits/form/copy-button";
import { Accordion, Box, Card, CardBody, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import AccordionSection from "@/bits/layout/accordion-section";
import ListerInput from "@/bits/form/ListerInput";

function SerenityCheckIn(): JSX.Element {
  const [canNotControl, setCanNotControl] = useState<string[]>([]);
  const [canControl, setCanControl] = useState<string[]>([]);

  const tocopy = `##Serenity Check-In
  Today I am trying to control that I cannot control:
  \t- ${canNotControl.join(", \n\t- ")}
  While I could and probably should be: 
  \t- ${canControl.join(", \n\t- ")}`;

  return (
    <Stack gap={4}>
      <Heading
        as="h2"
        size="lg"
        textAlign={"center"}
        paddingInline={4}>
        Let the Serentiy Prayer lead the way.
      </Heading>
      <Card
        background={"whiteAlpha.300"}
        border={["none", "1px solid"]}>
        <CardBody>
          <Stack gap={4}>
            <HStack
              align="start"
              justifyContent={"space-between"}>
              <Box padding={2}>
                <Text>Grant me the serenity to accept the things I cannot change.</Text>
                <Text> Courage to change the things I can.</Text>
                <Text> And wisdom to know the difference.</Text>
              </Box>
              <CopyButton
                text={tocopy}
                disabled={!canControl.length || !canNotControl.length}
              />
            </HStack>
            <Accordion
              allowToggle={true}
              allowMultiple={true}>
              <Stack gap={2}>
                <AccordionSection title="What are you trying to control that you cannot control?">
                  <ListerInput
                    list={canNotControl}
                    setList={setCanNotControl}
                    placeholder="Something you cannot control..."
                  />
                </AccordionSection>
                <AccordionSection title="What are avoiding that you actually could do?">
                  <ListerInput
                    list={canControl}
                    setList={setCanControl}
                    placeholder="What is something you could do..."
                  />
                </AccordionSection>
              </Stack>
            </Accordion>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
}
export default SerenityCheckIn;
