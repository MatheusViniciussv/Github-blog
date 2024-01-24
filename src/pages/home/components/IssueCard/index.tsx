import { NavLink } from "react-router-dom";
import { Container, Head, Title, Content } from "./styles";

interface CardProps {
  title: string
  content: string
  howLong: string
  id: number
}

export function IssueCard({ content, howLong, title, id }: CardProps) {
  return (
    <NavLink to={`post/${id}`}>
      <Container>
        <Head>
          <Title>{title}</Title>
          <span>{howLong}</span>
        </Head>
        <Content>
          {content}
        </Content>
      </Container>
    </NavLink>

  )
}