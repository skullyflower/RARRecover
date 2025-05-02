import CopyButton from "@/bits/form/copy-button";
import { Accordion, Box, Card, CardBody, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import AccordionSection from "@/bits/layout/accordion-section";
import DoubleListerInput, { doubleListItem } from "@/bits/form/DoubleListerInput";

function SerenityCheckIn(): JSX.Element {
  const [canCannotControl, setCanCannotControl] = useState<doubleListItem[]>([]);

  const tocopy = `Serenity Check-In:
${canCannotControl
  .map((pair) => {
    return `• Today I want to control, but cannot control:\n\t ${pair[0]}\n   While I could and probably should: \n\t ${pair[1]}`;
  })
  .join("\n\n")}`;

  return (
    <Stack
      gap={4}
      width="100%">
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
                disabled={!canCannotControl.length}
              />
            </HStack>
            <Accordion
              allowToggle={true}
              allowMultiple={true}
              defaultIndex={[0]}>
              <Stack gap={2}>
                <AccordionSection title="What are you trying to control that you cannot control?">
                  <DoubleListerInput
                    list={canCannotControl}
                    setList={setCanCannotControl}
                    labels={["I cannot control", "But I could "]}
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
