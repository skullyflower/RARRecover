import { Accordion, Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import AccordionSection from "@/bits/layout/accordion-section";
import DoubleListerInput, { doubleListItem } from "@/bits/form/DoubleListerInput";
import WhatYouWrote from "@/bits/WhatYouWrote";
import CollapsingText from "@/bits/layout/CollapsingText";
import PageCard from "@/bits/layout/page-card";

function Fears(): JSX.Element {
  const [letGo, setLetGo] = useState(false);
  const [fearsList, setFearsList] = useState<doubleListItem[]>([]);

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
      <PageCard>
        <Stack gap={4}>
          <Box padding={4}>
            <Stack gap={4}>
              <Text
                fontWeight={700}
                fontSize={"lg"}>
                Fear was &quot;an evil and corrosive thread&quot; weaving through our lives.
              </Text>
              <CollapsingText>
                <Stack gap={4}>
                  <Text>
                    Fears can grow in the dark corners of our minds, coloring our lives and limiting
                    our options.
                  </Text>
                  <Text>
                    It can help to put things into perspective and get you back in the present if
                    admit your fears out and pair them with a related gratitude.
                  </Text>
                  <Text>
                    Example: I&apos;m afraid of dying alone. I&apos;m grateful for my full healthy
                    life.
                  </Text>
                </Stack>
              </CollapsingText>
            </Stack>
          </Box>
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
      </PageCard>
    </Stack>
  );
}
export default Fears;
