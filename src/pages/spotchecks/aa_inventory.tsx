import { useState } from "react";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import InventoryForm from "@/pages/spotchecks/InventoryForm";

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
  FRIEGHTENED = 'I reacted badly because I was afraid, or triggered. \nMaybe you yelled something like, "I hate you!!"',
  HUNGRY = "I didn't eat when I should have and it made me cranky.",
  ANGRY = "I was already angry about something else, and wasn't able to be patient.",
  LONELY = "I was isolating, and by the time I realized I was lonely, it was too late.",
  TIRED = "I didn't sleep enough and wasn't able to cope with the situation.",
}
enum sucesses {
  CONNECTED = "I reached out to a trusted friend or mentor for support.",
  MEETING = "I went to a meeting and shared about it.",
  WRITING = "I took some time to journal about it.",
  PAUSED = "I realized I was too upset to respond without sabotaging myself and/or being overly cruel to the other person, so I waiting until I could think more rationally.",
  PRAYED = "I prayed to my Higher Power for help in dealing with the situation.",
  BOUNDARY = "I spoke up and set limits or walked away from the bad situation.",
  AMENDS = "I realized I'd make a mistake and admitted it",
  SERVICE = "I sought out someone else who needed help, or did service for my group.",
}

const AAInventoryForm = () => {
  const [Iresent, setIresent] = useState("");
  const [because, setBecause] = useState("");
  const [affectsMy, setAffectsMy] = useState<string[]>([]);
  const [myPart, setMyPart] = useState<string[]>([]);
  const [didWell, setDidWell] = useState<string[]>([]);
  const [learned, setLearned] = useState("");

  return (
    <Stack gap={4}>
      <Heading
        textAlign="center"
        as="h1"
        size="xl">
        Anger is a weird thing.
      </Heading>
      <Box
        paddingInline={4}
        fontSize="xl">
        <Text>
          We feel that someone/thing has wronged us. We feel they should be punished or stopped. And
          yet, most of the time, we do nothing but punish ourselves with our angry thoughts.
        </Text>
        <Text>It is we who suffer from our anger, not the wrong doer.</Text>
      </Box>

      <InventoryForm
        Iresent={Iresent}
        setIresent={setIresent}
        affects={affects}
        affectsMy={affectsMy}
        setAffectsMy={setAffectsMy}
        because={because}
        setBecause={setBecause}
        myPart={myPart}
        myParts={myParts}
        setMyPart={setMyPart}
        didWell={didWell}
        sucesses={sucesses}
        setDidWell={setDidWell}
        learned={learned}
        setLearned={setLearned}
      />
    </Stack>
  );
};
export default AAInventoryForm;
