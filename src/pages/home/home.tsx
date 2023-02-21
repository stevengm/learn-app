import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { StoriesBar } from "../../components/stories-bar/stories-bar";
import { StoryModel } from "../../models/story";
export function Home() {
  const { user } = useAuth();
  const storyMock: StoryModel[] = [
    {
      userName: "Test",
      image: "https://mui.com/static/images/avatar/1.jpg",
      description: "Test Description",
      comments: 0,
      likes: 1,
    },
    {
      userName: "Test",
      image: "https://mui.com/static/images/avatar/2.jpg",
      description: "Test Description",
      comments: 0,
      likes: 1,
    },
    {
      userName: "Test",
      image: "https://mui.com/static/images/avatar/3.jpg",
      description: "Test Description",
      comments: 0,
      likes: 1,
    },
    {
      userName: "Test",
      image: "https://mui.com/static/images/avatar/1.jpg",
      description: "Test Description",
      comments: 0,
      likes: 1,
    },
  ];
  if (!user) {
    return <Navigate to="login" />;
  }
  return (
    <>
      <StoriesBar stories={storyMock} />
    </>
  );
}
