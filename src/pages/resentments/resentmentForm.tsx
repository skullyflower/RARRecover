import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import StyledTextInput from "../../bits/form/StyledTextImput";
import CheckboxGroupBox from "../../bits/form/CheckBoxGroupBox";
import { useState } from "react";
import NeverLetGo from "@/bits/form/never-let-go";
import ReadyToLetGo from "@/bits/form/ready-to-let-go";
import SemiSafeContent from "@/bits/SemiSafeContent";
import { copyContents } from "@/bits/copyContents";
import { affects, myParts, sucesses } from "@/pages/resentments/resentment-constants";
import useProgramDropDown from "@/bits/form/useProgramDropDown";
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
  const [copied, setCopied] = useState(false);
  const [letGo, setLetGo] = useState(false);

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
      <Card
        bg="pink.900"
        color="purple.300"
        border="1px solid"
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
            <Text fontWeight={700}>I resent:</Text>
            <Box paddingInline={4}>
              <Text> {Iresent}</Text>
            </Box>
            <Text fontWeight={700}>Because:</Text>
            <Box paddingInline={4}>
              <SemiSafeContent rawContent={because} />
            </Box>
            <Text fontWeight={700}>It affects my:</Text>
            <UnorderedList>
              {affectsMy.map((effect, indx) => (
                <ListItem key={`affects${indx}`}>{effect.replace("_", " ")}</ListItem>
              ))}
            </UnorderedList>
            <Text fontWeight={700}>I contributed to the problem in these ways:</Text>
            <UnorderedList>
              {myPart.map((part, indx) => (
                <ListItem key={`part${indx}`}>{part.replace("_", " ")}</ListItem>
              ))}
            </UnorderedList>
            <Text fontWeight={700}>I did these things well:</Text>
            <UnorderedList>
              {didWell.map((part, indx) => (
                <ListItem key={`part${indx}`}>{part.replace("_", " ")}</ListItem>
              ))}
            </UnorderedList>
            <Text fontWeight={700}>And after looking at it this way, I now see ...</Text>
            <Box paddingInline={4}>
              <SemiSafeContent rawContent={learned} />
            </Box>
          </Stack>
        </CardBody>
        <CardFooter textAlign="center">
          <Button onClick={() => window.location.reload()}>Start Over</Button>
        </CardFooter>
        <ReadyToLetGo
          isOpen={isLettingGo}
          onClose={onCloseLetGo}
        />
      </Card>
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
          So, why don't you write about it?
        </Heading>
        <ProgramDropDown />
      </HStack>
      <Card
        bg="pink.900"
        //color="purple.200"
        border={["none", "1px solid"]}>
        <CardBody>
          <Stack gap={4}>
            <FormControl isRequired>
              <FormLabel fontWeight={700}>Who or what is bothering you?</FormLabel>
              <Input
                _focus={{ borderColor: "purple.200" }}
                name="Iresent"
                type="text"
                value={Iresent}
                placeholder="I resent..."
                onChange={(e) => setIresent(e.target.value)}
                maxLength={30}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontWeight={700}>And why? What did they do? Not do?:</FormLabel>
              <StyledTextInput
                value={because}
                setter={setBecause}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight={700}>How did it affect you? What did it threaten.</FormLabel>
              <CheckboxGroupBox
                valuesList={affectsMy}
                options={affects[selectedProgram as keyof typeof affects]}
                setter={setAffectsMy}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontWeight={700}>
                Now really, what part did you play in all of this?
              </FormLabel>
              <CheckboxGroupBox
                valuesList={myPart}
                options={myParts[selectedProgram as keyof typeof myParts]}
                setter={setMyPart}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontWeight={700}>What did you do well?</FormLabel>
              <CheckboxGroupBox
                valuesList={didWell}
                options={sucesses[selectedProgram as keyof typeof sucesses]}
                setter={setDidWell}
              />
            </FormControl>

            <Heading
              as="h3"
              size="md">
              Do you see the situation differently now?
            </Heading>
            <FormControl isRequired>
              <FormLabel fontWeight={700}>
                What might you have done differently? What might make things better? What did you do
                right?
              </FormLabel>
              <StyledTextInput
                value={learned}
                setter={setLearned}
              />
            </FormControl>
            <Heading textAlign="center">Are you ready to let it go?</Heading>
          </Stack>
        </CardBody>
        <CardFooter>
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
        </CardFooter>
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
