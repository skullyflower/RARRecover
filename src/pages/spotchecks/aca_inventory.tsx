import { useState } from "react";
import {
  Heading,
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
  Box,
  UnorderedList,
  ListItem,
  HStack,
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
  DONT_TRUST = "I didn't trust myself or that my Hight Power would take care of me, or I expected to be hurt, diregarded or betrayed by the other person.",
  DONT_TALK = "I didn't say what I needed to say. I didn't set a boundary, or I didn't ask for something I needed.",
  DONT_FEEL = "I stuffed or denied my feelings.",
  FINE = "I denied (or didn't notice) I was having a problem.",
  FIGHT = "I was argumentitive. I tried to force my point of view on others, or tried to control them.",
  FLIGHT = "I withdrew, isolated or evaded to avoided conflict.",
  FREEZE = "I got scared or overwhelmed, froze or put off dealing with it.",
  FAWN = "I tried to win them over with charm, humor or by being who I think they want me to be.",
  FIX = "I tried to fix the situation. I took on more responsibility than was truly mine, or I tried to rescue someone else who didn't ask for my help.",
  SELF_DEFEATING = "I did ask for help, but from the wrong person: someone who was sure to let me down or betray me.",
  SELF_RELIANCE = "I didn't reach out to friends or my higher power for support.",
  CRITICAL_SELF = "I was overly critical of myself.",
  CRITICAL_OTHERS = "I was overly critical of someone else.",
  CONTROL = "I was trying to control the person or situation.",
  SOUGHT_APPROVAL = "I over explained. I sought approval or validation from someone else, instead of approving of or believing myself.",
  PERFECTIONISM = "I forgot that mistakes are just part of living and learning.",
  ALL_OR_NOTHING = "I saw the situation from a rigid good/bad, pass/fail, right/wrong perspective, with no room for nuance.",
  GUILT = "I let guilt feelings stop me from taking the action necessary to take care and be responsible for myslef.",
}

const ACAInventoryForm = () => {
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
        ACA Style Spot Check Inventory
      </Heading>
      <Card
        bg="pink.900"
        color="purple.200"
        border={["none", "1px solid"]}>
        <CardHeader>
          <Heading
            as="h2"
            size="lg">
            So, why don't you write about it?
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack gap={4}>
            <FormControl isRequired>
              <FormLabel fontWeight={700}>Who or what is bothering you?</FormLabel>
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

      <p>
        <b>Your answers can NOT be viewed by anyone but you</b>. When you hit submit, your answers
        will be formatted so that you can copy or print them if you like, and share them with whom
        you choose.
      </p>
      <NeverLetGo
        isOpen={isNever}
        onClose={onNeverMind}
      />
    </Stack>
  );
};
export default ACAInventoryForm;
