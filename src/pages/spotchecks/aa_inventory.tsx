import { useState } from "react";
import {
  Box,
  Heading,
  HStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Stack,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import CheckboxGroupBox from "@/bits/form/CheckBoxGroupBox";
import StyledTextInput from "@/bits/form/StyledTextImput";
import ReadyToLetGo from "./ready-to-let-go";
import NeverLetGo from "./never-let-go";
import SemiSafeContent from "@/bits/SemiSafeContent";
import { copyContents } from "@/bits/copyContents";

//const page_title = "Write about it";

enum affects {
  INSECURE = "It's making me feel unsafe emotionally or physically.",
  SELF_ESTEEM = "It's making me feel bad about myself.",
  PERSONAL_RELATIONSHIPS = "It's damaging my relationships, with friends, family, or coworkers.",
  SEXUAL_RELATIONSHIP = "It's threatening my romantic or sexual relationships.",
  AMBITION = "It's threatening my getting what I want, big like a career, or small like the last chocolate doughnut",
}

enum myParts {
  SELFISH = "Well, I was being a bit SELFISH. Thinking mostly about what I wanted.",
  SELF_SEEKING = "I was SELF SEEKING. I tried to manipulate the situation to make it come out the way I wanted.",
  DISHONEST = "I wasn't being totally honest, with myself or others. Maybe I witheld information.",
  FRIEGHTENED = 'I reacted badly because I was afraid, or triggered. \nMaybe you yelled something like, "Fuck you you fucking fuck!"',
}

const AAInventoryForm = () => {
  const [letGo, setLetGo] = useState(false);
  const [Iresent, setIresent] = useState("");
  const [because, setBecause] = useState("");
  const [affectsMy, setAffectsMy] = useState<string[]>([]);
  const [myPart, setMyPart] = useState<string[]>([]);
  const [learned, setLearned] = useState("");
  const [copied, setCopied] = useState(false);

  const { isOpen: isLettingGo, onOpen: onLettingGo, onClose: onCloseLetGo } = useDisclosure();
  const { isOpen: isNever, onOpen: onNever, onClose: onNeverMind } = useDisclosure();

  const incomplete = !Iresent || !because || !affectsMy.length || !myPart.length || !learned;

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
            <Text>I resent: {Iresent}</Text>
            <Text fontWeight={700}>Because:</Text>
            <Box paddingInline={4}>
              <SemiSafeContent rawContent={because} />
            </Box>
            <Text fontWeight={700}>It affects my:</Text>
            <UnorderedList>
              {affectsMy.map((effect) => (
                <ListItem>{effect}</ListItem>
              ))}
            </UnorderedList>
            <Text fontWeight={700}>I contributed to the problem in these ways:</Text>
            <UnorderedList>
              {myPart.map((part) => (
                <ListItem>{part}</ListItem>
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
      <Heading
        textAlign="center"
        as="h1"
        size="xl">
        Anger is a weird thing.
      </Heading>
      <Text fontSize="xl">
        We feel that someone/thing has wronged us. We feel they should be punished or stopped. And
        yet, most of the time, we do nothing but punish ourselves with our angry thoughts. It is we
        who suffer from our anger, not the wrong doer.
      </Text>

      <Card
        bg="red.900"
        color="purple.400"
        border="1px solid">
        <CardHeader>
          <Heading>So, why don't you write about it?</Heading>
        </CardHeader>
        <CardBody>
          <Stack gap={4}>
            <FormControl isRequired>
              <FormLabel>Who or what is bothering you?</FormLabel>
              <Input
                colorScheme="purple"
                name="Iresent"
                type="text"
                value={Iresent}
                placeholder="I resent..."
                onChange={(e) => setIresent(e.target.value)}
                maxLength={30}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontWeight={700}>And why? What did they do? Not do?</FormLabel>
              <StyledTextInput
                value={because}
                setter={setBecause}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontWeight={700}>How did it affect you? What did it threaten.</FormLabel>
              <CheckboxGroupBox
                valuesList={affectsMy}
                options={affects}
                setter={setAffectsMy}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight={700}>
                Now really, what part were you playing in all of this?
              </FormLabel>
              <CheckboxGroupBox
                valuesList={myPart}
                options={myParts}
                setter={setMyPart}
              />
            </FormControl>
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
              disabled={incomplete}
              colorScheme="primary"
              name="letGo"
              onClick={letItGo}>
              Be Free!
            </Button>{" "}
            <Button
              colorScheme="red"
              onClick={neverLetItGo}>
              NEVER!!
            </Button>
          </Stack>
        </CardFooter>
      </Card>

      <p>
        <b>Your answers can NOT be viewed by anyone but you</b>. When you hit submit, your answers
        will be formatted so that you can copy or print them if you like, and share them with whom
        you choose.{" "}
      </p>
      <NeverLetGo
        isOpen={isNever}
        onClose={onNeverMind}
      />
    </Stack>
  );
};
export default AAInventoryForm;
