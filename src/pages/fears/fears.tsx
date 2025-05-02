import CopyButton from "@/bits/form/copy-button";
import { Accordion, Box, Card, CardBody, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import AccordionSection from "@/bits/layout/accordion-section";
import DoubleListerInput, { doubleListItem } from "@/bits/form/DoubleListerInput";

function Fears(): JSX.Element {
  const [fearsList, setFearsList] = useState<doubleListItem[]>([]);

  const tocopy = `Today I fear, but am grateful for:
  \t ${fearsList.map((pair) => `Fear: ${pair[0]} - Gratitude: ${pair[1]} \n\t `).join("\n\n")}`;

  return (
    <Stack
      width={"100%"}
      gap={4}>
      <Heading
        as="h2"
        size="lg"
        textAlign={"center"}
        paddingInline={4}>
        Fear and Gratitude, List?
      </Heading>
      <Card
        background={"whiteAlpha.300"}
        maxH={"74vh"}
        overflowY="auto">
        <CardBody>
          <Stack gap={4}>
            <HStack
              align="start"
              justifyContent={"space-between"}>
              <Box padding={2}>
                <Text>
                  Fear was &apos;and evil and corrosive thread&apos; weaving through our lives.
                </Text>
                <Text>
                  Often, if you think it through, you will find that you have much to be grateful
                  for.
                </Text>
              </Box>

              <CopyButton
                text={tocopy}
                disabled={!fearsList.length || !fearsList.length}
              />
            </HStack>
            <Accordion
              allowToggle={true}
              allowMultiple={true}
              defaultIndex={[0]}>
              <Stack gap={2}>
                <AccordionSection title="I'm afraid of..., but grateful that...">
                  <DoubleListerInput
                    list={fearsList}
                    labels={["fear", "gratitude"]}
                    setList={setFearsList}
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
export default Fears;
