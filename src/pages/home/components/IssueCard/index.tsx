import { NavLink } from "react-router-dom";
import { Container, Head, Title, Content } from "./styles";
import { FormatedDate } from "../../../../utils/dateFormated";

interface CardProps {
  title: string
  body: string
  updated_at: string
  id: number
}

export function IssueCard({ body, updated_at, title, id }: CardProps) {
  return (
    <Container>
      <NavLink to={`post/${id}`}>
        <Head>
          <Title>{title}</Title>
          <span>{FormatedDate(updated_at)}</span>
        </Head>
        <Content>
          {body}
        </Content>
      </NavLink>
    </Container>

  )
}