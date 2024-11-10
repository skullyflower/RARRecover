import { useState } from "react";
import { Heading, Stack } from "@chakra-ui/react";
import InventoryForm from "@/pages/spotchecks/InventoryForm";

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
enum sucesses {
  CONNECTED = "I reached out to a trusted friend or mentor for support.",
  MEETING = "I went to a meeting and shared about it.",
  WRITING = "I took some time to journal about it.",
  PAUSED = "I realized I was too upset to respond without sabotaging myself and/or being overly cruel to the other person, so I waiting until I could think more rationally.",
  PRAYED = "I prayed to my Higher Power for help in dealing with the situation.",
  BOUNDARY = "I spoke up and set limits or walked away from the bad situation.",
  SELF_VALIDATION = "I listed to and validated my own needs feelings and thoughts.",
  AMENDS = "I realized I'd make a mistake, forgave myself,  and admitted it",
  SELF_CARE = "I took care of myself instead of trying to make someone else do it.",
}

const ACAInventoryForm = () => {
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
        ACA Style Spot Check Inventory
      </Heading>
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
export default ACAInventoryForm;
