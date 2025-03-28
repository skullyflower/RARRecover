import { Accordion, Heading, Stack, Text, CardBody, Card } from "@chakra-ui/react";
import TraitsSection from "./traits-section";
import ChoiceSection from "./choice-section";
import ToolsUsedToday from "./tools-today";
import FeelingsStatement from "./feelings-statement";
import AssetsSection from "./assets-section";
import AccordionSection from "@/bits/form/accordion-section";

const AcaTenthStep = () => {
  return (
    <Stack gap={4}>
      <Heading
        textAlign="center"
        as="h1"
        size="xl">
        ACA Step 10
      </Heading>
      <Card
        background={"whiteAlpha.300"}
        width={"900px"}
        border={["none", "1px solid"]}>
        <CardBody>
          <Stack gap={4}>
            <Text>Spiritual Principles: Honesty and Discernment</Text>
            <Accordion
              allowToggle={true}
              defaultIndex={[0]}>
              <Stack gap={2}>
                <AccordionSection title="Exercise 1: Traits">
                  <TraitsSection />
                </AccordionSection>
                <AccordionSection title="Exercise 2: Choice Continuum">
                  <ChoiceSection />
                </AccordionSection>
                <AccordionSection title="Exercise 3: Tools">
                  <ToolsUsedToday />
                </AccordionSection>
                <AccordionSection title="Exercise 4: Feelings">
                  <FeelingsStatement />
                </AccordionSection>
                <AccordionSection title="Exercise 5: Praise">
                  <AssetsSection />
                </AccordionSection>
              </Stack>
            </Accordion>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
};
export default AcaTenthStep;
