import {
  Accordion,
  Box,
  Button,
  Card,
  FormControl,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import StyledTextInput from "../../bits/form/styledTextInput/StyledTextInput";
import CheckboxGroupBox from "../../bits/form/CheckBoxGroupBox";
import { useState } from "react";
import NeverLetGo from "@/bits/form/never-let-go";
import { affects, myParts, successes, strings } from "@/pages/resentments/resentment-constants";
import useProgramDropDown from "@/bits/form/useProgramDropDown";
import ResentBeGone from "./resentment-be-gone";
import AccordionSection from "@/bits/layout/accordion-section";
import CollapsingText from "@/bits/layout/CollapsingText";
const programOptions = Object.keys(affects);

const ResentmentsForm = () => {
  const [Iresent, setIresent] = useState("");
  const [because, setBecause] = useState("");
  const [affectsMy, setAffectsMy] = useState<string[]>([]);
  const [myPart, setMyPart] = useState<string[]>([]);
  const [didWell, setDidWell] = useState<string[]>([]);
  const [learned, setLearned] = useState("");

  const incomplete =
    !Iresent || !because || !affectsMy.length || !myPart.length || !didWell.length || !learned;
  const [letGo, setLetGo] = useState(false);

  const reset = (): void => {
    setLetGo(false);
    setIresent("");
    setBecause("");
    setAffectsMy([]);
    setMyPart([]);
    setDidWell([]);
    setLearned("");
  };

  const { isOpen: isLettingGo, onOpen: onLettingGo, onClose: onCloseLetGo } = useDisclosure();
  const { isOpen: isNever, onOpen: onNever, onClose: onNeverMind } = useDisclosure();

  const { ProgramDropDown, selectedProgram } = useProgramDropDown(programOptions);

  const letItGo = () => {
    setLetGo(true);
    onLettingGo();
  };

  const neverLetItGo = () => {
    onNever();
  };

  if (letGo) {
    return (
      <ResentBeGone
        Iresent={Iresent}
        because={because}
        affectsMy={affectsMy}
        myPart={myPart}
        didWell={didWell}
        learned={learned}
        isLettingGo={isLettingGo}
        onLettingGo={onLettingGo}
        onCloseLetGo={onCloseLetGo}
        reset={reset}
      />
    );
  }

  return (
    <Stack gap={4}>
      <HStack
        align="center"
        justify={"center"}
        gap={4}>
        <Heading
          as="h2"
          size="lg">
          {strings[selectedProgram as keyof typeof strings].title}
        </Heading>
        <ProgramDropDown />
      </HStack>
      <Card
        bg="whiteAlpha.300"
        border={["none", "1px solid"]}>
        <Box padding={4}>
          <CollapsingText>
            <Stack gap={4}>
              {strings[selectedProgram as keyof typeof strings].intro.map((line, index) => (
                <Text key={index}>{line}</Text>
              ))}
            </Stack>
          </CollapsingText>
          <Text
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize="lg"
            marginBlock={4}>
            {`So, why don't you write about it?`}
          </Text>
        </Box>
        <Accordion allowToggle={true}>
          <Stack
            gap={2}
            padding={4}>
            <AccordionSection title="Who or what is bothering you?">
              <Stack gap={4}>
                <FormControl isRequired>
                  <Input
                    _focus={{ borderColor: "purple.200" }}
                    name="Iresent"
                    type="text"
                    value={Iresent}
                    placeholder="Person, institution, concept, or situation"
                    onChange={(e) => setIresent(e.target.value)}
                    maxLength={100}
                  />
                </FormControl>
              </Stack>
            </AccordionSection>
            <AccordionSection title="And why?">
              <FormControl isRequired>
                <StyledTextInput
                  value={because}
                  setter={setBecause}
                  placeholder="Let it all out..."
                />
              </FormControl>
            </AccordionSection>
            <AccordionSection title="How does it affect you? What does it threaten?">
              <FormControl isRequired>
                <CheckboxGroupBox
                  valuesList={affectsMy}
                  options={affects[selectedProgram as keyof typeof affects]}
                  setter={setAffectsMy}
                />
              </FormControl>
            </AccordionSection>
            <AccordionSection title="What part did you play in this?">
              <FormControl isRequired>
                <CheckboxGroupBox
                  valuesList={myPart}
                  options={myParts[selectedProgram as keyof typeof myParts]}
                  setter={setMyPart}
                />
              </FormControl>
            </AccordionSection>
            <AccordionSection title="What did you do well?">
              <FormControl isRequired>
                <CheckboxGroupBox
                  valuesList={didWell}
                  options={successes[selectedProgram as keyof typeof successes]}
                  setter={setDidWell}
                />
              </FormControl>
            </AccordionSection>
            <AccordionSection title="Do you see the situation differently now?">
              <FormControl isRequired>
                <StyledTextInput
                  value={learned}
                  setter={setLearned}
                />
              </FormControl>
            </AccordionSection>
            <Stack
              width="100%"
              direction="row"
              gap={4}
              justifyContent="center">
              <Button
                isDisabled={incomplete}
                colorScheme="purple"
                name="letGo"
                onClick={letItGo}>
                Be Free!
              </Button>{" "}
              <Button
                colorScheme="purple"
                onClick={neverLetItGo}>
                NEVER!!
              </Button>
            </Stack>
          </Stack>
        </Accordion>
      </Card>
      <Box p={4}>
        <Text>
          <b>Your answers can NOT be viewed by anyone but you</b>. When you hit submit, your answers
          will be formatted so that you can copy or print them if you like, and share them with whom
          you choose.
        </Text>
      </Box>
      <NeverLetGo
        isOpen={isNever}
        onClose={onNeverMind}
      />
    </Stack>
  );
};
export default ResentmentsForm;
