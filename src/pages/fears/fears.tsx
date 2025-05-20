import CopyButton from "@/bits/form/copy-button";
import {
  Accordion,
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import AccordionSection from "@/bits/layout/accordion-section";
import DoubleListerInput, { doubleListItem } from "@/bits/form/DoubleListerInput";
import WhatYouWrote from "@/bits/WhatYouWrote";

function Fears(): JSX.Element {
  const [letGo, setLetGo] = useState(false);
  const [fearsList, setFearsList] = useState<doubleListItem[]>([]);

  const tocopy = `Today I fear, but am grateful for:
  \t ${fearsList.map((pair) => `Fear: ${pair[0]} - Gratitude: ${pair[1]} \n\t `).join("\n\n")}`;

  const reset = (): void => {
    setLetGo(false);
    setFearsList([]);
  };

  if (letGo) {
    return (
      <WhatYouWrote
        reset={reset}
        fearsList={fearsList}
      />
    );
  }

  return (
    <Stack
      width={"100%"}
      gap={4}>
      <Heading
        as="h2"
        size="lg"
        textAlign={"center"}
        paddingInline={4}>
        What Frightens You Today?
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
                  Fear was &apos;an evil and corrosive thread&apos; weaving through our lives.
                </Text>
                <Text>
                  Fears can grow in the dark corners of our minds, coloring our lives and limiting
                  our options.
                </Text>
                <Text>
                  It can help to put things into perspective to pull your fears out and pair them
                  with a related gratitude.
                </Text>
                <Text>
                  Example: I&apos;m afraid of dying alone. I&apos;m grateful for my full healthy
                  life.
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
                    labels={["I am afraid of", "but gradteful that"]}
                    setList={setFearsList}
                  />
                </AccordionSection>
              </Stack>
            </Accordion>
            <Stack
              width="100%"
              direction="row"
              gap={4}
              justifyContent="center"
              position={"sticky"}
              bottom={2}>
              <Button
                isDisabled={fearsList.length === 0}
                colorScheme="purple"
                name="letGo"
                onClick={() => setLetGo(true)}>
                Be Free!
              </Button>
            </Stack>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
}
export default Fears;
