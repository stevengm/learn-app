import Avatar from "@mui/material/Avatar";

type StoryProps = {
    image: string;
    alt: string;
  };

export const Story = (props: StoryProps) => {
  return (
      <Avatar alt={props.alt} src={props.image} />
  );
};
