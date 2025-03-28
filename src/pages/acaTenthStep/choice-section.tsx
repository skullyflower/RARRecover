import {
  Box,
  Card,
  CardBody,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { choiceLevels } from "./aca-tenth-constants";

const ChoiceSection = () => {
  const [freedomValue, setFreedomValue] = useState<number>(50);
  const [freedomLevel, setFreedomLevel] = useState<string>("");

  const handleSelected = (value: number) => {
    setFreedomValue(value);
    const stringValue =
      value < choiceLevels["Some Choice"]
        ? "Denial"
        : value < choiceLevels["Greater Choice"]
        ? "Some Choice"
        : value < choiceLevels["Decernment"]
        ? "Greater Choice"
        : "Decernment";
    setFreedomLevel(stringValue);
  };
  return (
    <Card
      bg="pink.900"
      //color="purple.200"
      border={["none", "1px solid"]}>
      <CardBody>
        <Stack gap={4}>
          <Text>
            Where are you on the scale today, control wise? <b>{freedomLevel}</b>
          </Text>
          <Box
            bgColor={"blackAlpha.100"}
            borderRadius={6}
            padding={4}>
            <Stack gap={4}>
              <Slider
                aria-label="slider-ex-5"
                step={16.5}
                value={freedomValue}
                onChange={(val) => handleSelected(val)}>
                <SliderMark
                  value={0}
                  mt="3"
                  fontSize="sm">
                  Denial
                </SliderMark>
                <SliderMark
                  value={33}
                  mt="3"
                  ml="-1em"
                  fontSize="sm">
                  Some Choice
                </SliderMark>
                <SliderMark
                  value={66}
                  mt="3"
                  ml="-1.5em"
                  fontSize="sm">
                  Greater Choice
                </SliderMark>
                <SliderMark
                  value={100}
                  mt="3"
                  ml="-3em"
                  fontSize="sm">
                  Decernment
                </SliderMark>{" "}
                <SliderTrack
                  backgroundColor="red.400"
                  w={3}>
                  <SliderFilledTrack backgroundColor="green.400" />
                </SliderTrack>
                <SliderThumb
                  w={6}
                  h={6}
                />
              </Slider>
            </Stack>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
export default ChoiceSection;
