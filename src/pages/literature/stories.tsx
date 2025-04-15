import { Box, Card, Heading, Image, Stack } from "@chakra-ui/react";
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
        bg="whiteAlpha.300"
        color="purple.200"
        border={["none", "1px solid"]}>
        <Stack
          gap={4}
          align={"center"}
          p={4}>
          {stories.map(([key, story]) => {
            return (
              <Box
                border={["none", "1px solid"]}
                bg={"pink.900"}
                key={key}
                p={6}
                borderRadius={6}>
                {!seenTitles.includes(story.imgtitle) && seenTitles.push(story.imgtitle) && (
                  <Heading
                    textAlign="center"
                    as="h3"
                    size="lg"
                    marginBlock={4}>
                    {story.imgtitle}
                  </Heading>
                )}

                <Image
                  width={story.wide ? "1000px" : "500px"}
                  src={`/comics/${story.imgfile}`}
                  alt={story.imgtitle}
                  fallbackSrc="/images/rain.svg"
                />
              </Box>
            );
          })}
        </Stack>
      </Card>
    </Stack>
  );
};
export default Stories;
