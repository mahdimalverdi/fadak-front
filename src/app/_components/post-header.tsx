import Avatar from "./avatar";
import CoverImage from "./cover-image";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";
import Container from "@/app/_components/container";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export function PostHeader({ title, coverImage, date }: Props) {
  return (
      <div>

    <Container>
        <PostTitle date={date}>{title}</PostTitle>
    </Container>
      </div>
  );
}
