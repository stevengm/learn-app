import { Story } from "./story";
import { StoriesModel } from "../../models/story";
import Stack from "@mui/material/Stack";

type StoriesProps = {
  stories: StoriesModel;
};

export const StoriesBar = (props: StoriesProps) => {
  return (
    <Stack direction="row" spacing={2}>
      {props.stories.map((story) => (
        <Story alt={story.description} image={story.image} key={story.image} />
      ))}
    </Stack>
  );
};
