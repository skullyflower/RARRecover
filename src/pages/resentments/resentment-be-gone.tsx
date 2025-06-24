import { getContents } from "@/pages/resentments/copyContents";
import ReadyToLetGo from "@/bits/form/ready-to-let-go";
import SemiSafeContent from "@/bits/SemiSafeContent";
import {
  Box,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import CopyButton from "@/bits/form/copy-button";
import PageCard from "@/bits/layout/page-card";
import ColorBox from "@/bits/layout/color-box";

interface ResentBeGoneProps {
  Iresent: string;
  because: string;
  affectsMy: string[];
  myPart: string[];
  didWell: string[];
  learned: string;
  isLettingGo: boolean;
  onLettingGo: () => void;
  onCloseLetGo: () => void;
  reset: () => void;
}

const ResentBeGone = ({
  Iresent,
  because,
  affectsMy,
  myPart,
  didWell,
  learned,
  isLettingGo,
  onCloseLetGo,
  reset,
}: ResentBeGoneProps) => {
  const stringToWrite = getContents();

  return (
    <Stack
      gap={4}
      width="100%">
      <PageCard>
        <CardHeader>
          <HStack justifyContent="space-between">
            <Text>Here is what you wrote.</Text>
            <CopyButton
              text={stringToWrite}
              disabled={
                !Iresent ||
                !because ||
                !affectsMy.length ||
                !myPart.length ||
                !didWell.length ||
                !learned
              }
            />
          </HStack>
        </CardHeader>
        <CardBody>
          <ColorBox>
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
          </ColorBox>
        </CardBody>
        <CardFooter textAlign="center">
          <Button onClick={reset}>Start Over</Button>
        </CardFooter>
        <ReadyToLetGo
          isOpen={isLettingGo}
          onClose={onCloseLetGo}
        />
      </PageCard>
    </Stack>
  );
};
export default ResentBeGone;
