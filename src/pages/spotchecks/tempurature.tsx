import { useState } from "react";
import {
  Slider,
  SliderFilledTrack,
  SliderTrack,
  SliderThumb,
  HStack,
  Text,
  Heading,
  Stack,
  Box,
  Textarea,
  Button,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { copyContents } from "@/bits/copyContents";

interface OneStep {
  step: number;
  principle: string;
  opposite: string;
}

interface stepValue {
  percent: number;
  more: string;
}

interface StepBoxProps extends OneStep {
  onChange: (newValue: { percent: number; more: string }) => () => void;
  value: stepValue;
}
// Instead of opposite ego driven paralell.
const StepCheckList: OneStep[] = [
  {
    step: 1,
    principle: "Honesty",
    opposite: "Denial",
  },
  {
    step: 2,
    principle: "Hope",
    opposite: "Resignation",
  },
  {
    step: 3,
    principle: "Faith",
    opposite: "Self-Will",
  },
  {
    step: 4,
    principle: "Courage",
    opposite: "Cowardice",
  },
  {
    step: 5,
    principle: "Integrity",
    opposite: "Dishonesty",
  },
  {
    step: 6,
    principle: "Willingness",
    opposite: "Willfullness",
  },
  {
    step: 7,
    principle: "Humility",
    opposite: "Arrogance",
  },
  {
    step: 8,
    principle: "Love",
    opposite: "Codependence",
  },
  {
    step: 9,
    principle: "Justice",
    opposite: "Blame",
  },
  {
    step: 10,
    principle: "Perseverance",
    opposite: "Discontinuation",
  },
  {
    step: 11,
    principle: "Spirituality",
    opposite: "Self Centeredness",
  },
  {
    step: 12,
    principle: "Service",
    opposite: "Bossiness or Laziness",
  },
];

const initialState: Record<string, stepValue> = {
  "1": { percent: 50, more: "" },
  "2": { percent: 50, more: "" },
  "3": { percent: 50, more: "" },
  "4": { percent: 50, more: "" },
  "5": { percent: 50, more: "" },
  "6": { percent: 50, more: "" },
  "7": { percent: 50, more: "" },
  "8": { percent: 50, more: "" },
  "9": { percent: 50, more: "" },
  "10": { percent: 50, more: "" },
  "11": { percent: 50, more: "" },
  "12": { percent: 50, more: "" },
};

const StepBox = ({ step, principle, opposite, value, onChange }: StepBoxProps) => {
  const { percent, more } = value;

  return (
    <Box
      bgColor={"blackAlpha.100"}
      borderRadius={6}
      p={2}
      h="600px">
      <Heading size={"md"}>Step {step} :</Heading>
      <Stack gap={4}>
        <Box>
          <Button
            w="90%"
            padding={2}
            m={2}
            fontSize={20}
            borderRadius={10}
            colorScheme="green"
            onClick={onChange({ ...value, percent: percent + 5 })}
            textAlign="center">
            {principle}
          </Button>
          <Text textAlign="center">{percent}%</Text>
        </Box>
        <Slider
          h="250px"
          orientation="vertical"
          aria-label="slider-ex-5"
          step={5}
          value={percent}
          onChange={(val) => onChange({ ...value, percent: val })()}>
          <SliderTrack w={3}>
            <SliderFilledTrack backgroundColor={percent > 50 ? "green.400" : "red.400"} />
          </SliderTrack>
          <SliderThumb
            w={6}
            h={6}
          />
        </Slider>
        <Box>
          <Text textAlign="center">{100 - percent}%</Text>
          <Button
            w="90%"
            padding={2}
            m={2}
            fontSize={14}
            borderRadius={10}
            colorScheme="red"
            onClick={onChange({ ...value, percent: percent - 5 })}
            textAlign="center">
            {opposite}
          </Button>
        </Box>
      </Stack>
      <Textarea
        colorScheme="purple"
        value={more}
        onChange={({ target }) => onChange({ ...value, more: target.value })()}
        placeholder="Tell me more..."
      />
    </Box>
  );
};

const SpotCheckForm = () => {
  const [values, setValues] = useState(initialState);
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);

  const updateOneStep = (step: number) => (newValue: { percent: number; more: string }) => () => {
    setValues({ ...values, [`${step}`]: newValue });
  };

  if (done) {
    return (
      <Card
        bg="pink.900"
        color="purple.300"
        border="1px solid"
        size="lg"
        maxW={800}
        marginInline="auto"
        marginBlock={4}>
        <CardHeader>
          <HStack justifyContent="space-between">
            <Text>Here is what you wrote.</Text>
            <Button onClick={() => setCopied(copyContents())}>{copied ? "copied" : "copy"}</Button>
          </HStack>
        </CardHeader>
        <CardBody border="1px solid">
          <Stack
            gap={4}
            id="ToCopy">
            {Object.entries(values).map((value) => {
              const step = StepCheckList.find((step) => String(step.step) === value[0]);
              return (
                <Box key={step?.principle}>
                  <Text>{`Step ${step?.step}: ${value[1].percent}% ${step?.principle}`}</Text>
                  <Text>{value[1].more}</Text>
                </Box>
              );
            })}
          </Stack>
        </CardBody>
        <CardFooter>
          <Button onClick={() => window.location.reload()}>Start Over</Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Stack gap={4}>
      <Heading
        textAlign="center"
        as="h1"
        size="xl">
        So, how'd we do today?
      </Heading>
      <Heading
        size="sm"
        as="span"
        flex="1"
        textAlign="left">
        The principles
      </Heading>
      <Box
        backgroundColor="blue.900"
        border={["none", "1px solid"]}
        borderRadius={15}
        p={4}>
        <SimpleGrid
          columns={[2, 2, 3, 4]}
          gap={4}>
          {StepCheckList.map((step) => (
            <StepBox
              key={step.step}
              step={step.step}
              principle={step.principle}
              opposite={step.opposite}
              value={values[String(step.step)]}
              onChange={updateOneStep(step.step)}
            />
          ))}
        </SimpleGrid>
        <HStack
          width="100%"
          gap={4}
          justifyContent="center">
          <Button
            disabled={false}
            colorScheme="primary"
            name="letGo"
            onClick={() => {
              setDone(true);
            }}>
            See Results
          </Button>{" "}
          <Button
            colorScheme="red"
            onClick={() => {
              setValues(initialState);
            }}>
            Reset
          </Button>
        </HStack>
      </Box>
    </Stack>
  );
};
export default SpotCheckForm;
