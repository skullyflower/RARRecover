import { Card, Heading, Image, Stack } from "@chakra-ui/react";
import images from "./list_file.json";

const Stories = () => {
  const stories = Object.entries(images);
  const seenTitles: string[] = [];
  return (
    <Stack gap={4}>
      <Heading
        textAlign="center"
        as="h1"
        size="xl">
        RARR Stories
      </Heading>
      <Card
        bg="pink.900"
        color="purple.200"
        border={["none", "1px solid"]}>
        <Stack
          gap={4}
          p={4}>
          {stories.map(([key, story]) => {
            return (
              <>
                {!seenTitles.includes(story.imgtitle) && seenTitles.push(story.imgtitle) && (
                  <Heading
                    textAlign="center"
                    as="h3"
                    size="lg"
                    marginTop={4}>
                    {story.imgtitle}
                  </Heading>
                )}
                <Image
                  key={key}
                  width="750px"
                  src={`/comics/${story.imgfile}`}
                  alt={story.imgtitle}
                  fallbackSrc="/images/rain.svg"
                />
              </>
            );
          })}
        </Stack>
      </Card>
    </Stack>
  );
};
export default Stories;
