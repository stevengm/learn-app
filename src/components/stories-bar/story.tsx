import Avatar from "@mui/material/Avatar";
import "./story.scss";

type StoryProps = {
    image: string;
    alt: string;
  };

export const Story = (props: StoryProps) => {
  return (
      <Avatar className="avatar" alt={props.alt} src={props.image} />
  );
};
